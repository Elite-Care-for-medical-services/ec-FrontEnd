import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css"; // Ensure Tailwind CSS is imported

// TypeScript interface for schema structure
interface SchemaField {
  type: string;
  notes?: string;
  description?: string;
  values?: string[];
  properties?: Record<string, SchemaField>;
}

interface PatientSchema {
  userId?: SchemaField;
  name?: SchemaField;
  email?: SchemaField;
  bloodGroup?: SchemaField;
  gender?: SchemaField;
  homeAddress?: SchemaField;
  emergencyContact?: SchemaField;
}

const PatientsAPI = () => {
  const [patient, setPatient] = useState<PatientSchema | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch("/api/data-model/patient");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setPatient(data.Patient || data); // Extract Patient schema
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching patient schema:", error);
        setIsLoading(false);
      }
    };

    fetchPatient();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Fixed: Return valid JSX
  }

  if (!patient) {
    return <p>No patient schema available</p>;
  }

  console.log("Patient schema:", patient);

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-purple-200 text-opacity-75">Patient Details</h1>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">
          <strong>Name:</strong> Type: {patient.name?.type || "N/A"}, Notes: {patient.name?.notes || "N/A"} <br />
          <strong>Email:</strong> Type: {patient.email?.type || "N/A"}, Notes: {patient.email?.notes || "N/A"} <br />
          <strong>Blood Group:</strong> Type: {patient.bloodGroup?.type || "N/A"}, Notes: {patient.bloodGroup?.notes || "N/A"} <br />
          <strong>Gender:</strong> Type: {patient.gender?.type || "N/A"}, Values: {(patient.gender?.values || []).join(", ") || "N/A"} <br />
          <strong>Address:</strong> Type: {patient.homeAddress?.type || "N/A"}, Notes: {patient.homeAddress?.notes || "N/A"} <br />
          <strong>Emergency Contact:</strong> Type: {patient.emergencyContact?.type || "N/A"}, Properties: {patient.emergencyContact?.properties ? Object.keys(patient.emergencyContact.properties).join(", ") : "N/A"}
        </li>
      </ul>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default PatientsAPI;
