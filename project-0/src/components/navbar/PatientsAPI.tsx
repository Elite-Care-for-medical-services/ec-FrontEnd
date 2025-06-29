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

// Made patient types to assure the API being used is from the company schema
interface PatientSchema {
  userId?: SchemaField;
  name?: SchemaField;
  email?: SchemaField;
  bloodGroup?: SchemaField;
  gender?: SchemaField;
  homeAddress?: SchemaField;
  emergencyContact?: SchemaField;
  accountStatus?: SchemaField;
  authToken?: SchemaField;
  backupAddress?: SchemaField;
  birthDate?: SchemaField;
  communicationPreferences?: SchemaField;
  createdAt?: SchemaField;
  isEmailVerified?: SchemaField;
  isPhoneVerified?: SchemaField;
  passwordHash?: SchemaField;
  phoneNumber?: SchemaField;
  preferredLanguage?: SchemaField;
  profilePicture?: SchemaField;
  refreshToken?: SchemaField;
  salt?: SchemaField;
  updatedAt?: SchemaField;
}


// Patients API logic starts from here
// if the api is not avaliable it will give you an http error message
// if not resoponse is received, it will return a loading message
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
    return <p>Loading...</p>;
  }

  // if no patient schema is available, it will return a message
  if (!patient) {
    return <p>No patient schema available</p>;
  }

  // the following are the rendered fields of the patient schema API
  const patientFields = [
  { label: "User ID",description: patient.userId?.description, type: patient.userId?.type, notes: patient.userId?.notes, values: patient.userId?.values },
  { label: "Name", type: patient.name?.type, notes: patient.name?.notes, values: patient.name?.values },
  { label: "Email", type: patient.email?.type, notes: patient.email?.notes },
  { label: "Blood Group", type: patient.bloodGroup?.type, notes: patient.bloodGroup?.notes },
  { label: "Gender", type: patient.gender?.type, notes: (patient.gender?.values || []).join(", ") },
  { label: "Home Address", description: (patient.homeAddress?.properites || []).join(", "), type: patient.homeAddress?.type, notes: patient.homeAddress?.notes},
  {
    label: "Emergency Contact",
    description: patient.emergencyContact?.description,
    type: patient.emergencyContact?.type,
    notes: patient.emergencyContact?.properties
      ? Object.keys(patient.emergencyContact.properties).join(", ")
      : "N/A",
  },
  { label: "Account Status", type: patient.accountStatus?.type, notes: patient.accountStatus?.notes, values: patient.accountStatus?.values },
  { label: "Auth Token", description: patient.authToken?.description, type: patient.authToken?.type, notes: patient.authToken?.notes },
  { label: "Backup Address", type: patient.backupAddress?.type, notes: patient.backupAddress?.notes },
  { label: "Birth Date", type: patient.birthDate?.type, notes: patient.birthDate?.notes },
  {
    label: "Communication Preferences",
    description: patient.communicationPreferences?.description,
    type: patient.communicationPreferences?.items.type,
    notes: patient.communicationPreferences?.notes,
    values: patient.communicationPreferences?.items?.values,
  },
  { label: "Created At", description: patient.createdAt?.description, type: patient.createdAt?.type, notes: patient.createdAt?.notes },
  { label: "Is Email Verified", description: patient.isEmailVerified?.description, type: patient.isEmailVerified?.type, notes: patient.isEmailVerified?.notes },
  { label: "Is Phone Verified", description: patient.isPhoneVerified?.description, type: patient.isPhoneVerified?.type, notes: patient.isPhoneVerified?.notes },
  { label: "Password Hash", description: patient.passwordHash?.description, type: patient.passwordHash?.type, notes: patient.passwordHash?.notes },
  { label: "Phone Number", type: patient.phoneNumber?.type, notes: patient.phoneNumber?.notes },
  { label: "Preferred Language", description: patient.preferredLanguage?.description, type: patient.preferredLanguage?.type, notes: patient.preferredLanguage?.notes },
  { label: "Profile Picture", type: patient.profilePicture?.type, notes: patient.profilePicture?.notes },
  { label: "Refresh Token", description: patient.refreshToken?.description, type: patient.refreshToken?.type, notes: patient.refreshToken?.notes },
  { label: "Salt", description: patient.salt?.description, type: patient.salt?.type, notes: patient.salt?.notes },
  { label: "Updated At", description: patient.updatedAt?.description, type: patient.updatedAt?.type, notes: patient.updatedAt?.notes },
];

  // Rendering the patient details in a table format
  return (
<>
<div className="min-h-screen bg-purple-50 bg-opacity-10 p-10" style={{ backgroundColor: "#FFFDF6" }}>
  <h1 className="text-2xl font-bold mb-4 text-purple-300 text-opacity-75">Patient Details</h1>
      <table className="table-auto w-full text-left text-black border-collapse mb-6">
        <thead>
          <tr className="bg-purple-50 bg-opacity-10">
            <th className="px-4 py-2">Field</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Notes</th>
            <th className="px-4 py-2">Values</th>
          </tr>
        </thead>
        {/* Mapped through patientFields to create table rows */}
        <tbody>
          {patientFields.map((field, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 font-semibold">{field.label}</td>
              <td className="border px-4 py-2">{field.description || "N/A"}</td>
              <td className="border px-4 py-2">{field.type || "N/A"}</td>
              <td className="border px-4 py-2">{field.notes || "N/A"}</td>
              <td className="border px-4 py-2">
                {field.values?.length ? field.values.join(", ") : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>



  {/*we can return back from this code to the homepage*/}
  <Link
    to="/"
    className="bg-purple-50 text-white px-4 py-2 rounded-md hover:bg-purple-100 transition duration-300"
  >
    Back to Homepage
  </Link>
</div>
</>
  );
};

export default PatientsAPI;
