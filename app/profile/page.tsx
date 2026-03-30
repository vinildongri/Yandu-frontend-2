"use client"

import { useState, useEffect } from "react";

const ClientProfile = () => {
  // --- States ---
  const [client, setClient] = useState(null);
  const [projects, setProjects] = useState([]);
  
  // Status states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Editing states
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // --- Fetch Data on Mount ---
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // REPLACE WITH YOUR ACTUAL API ENDPOINT
        // const response = await fetch('/api/client-profile/1');
        // const data = await response.json();

        // Simulating an API call delay for demonstration
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock Backend Response
        const mockData = {
          name: "Rahul Sharma",
          company: "TechNova",
          email: "rahul@email.com",
          avatar: "https://i.pravatar.cc/150?img=3",
          projectsSubmitted: 5,
          completed: 3,
          inProgress: 2,
          totalSpent: "₹75,000",
          projects: [
            { id: 1, title: "Ecommerce Website", status: "In Progress", budget: "₹25,000", start: "10 Mar 2026" },
            { id: 2, title: "Mobile App UI", status: "Completed", budget: "₹15,000", start: "20 Feb 2026" }
          ]
        };

        setClient(mockData);
        setFormData({ name: mockData.name, company: mockData.company, email: mockData.email });
        setProjects(mockData.projects);
      } catch (err) {
        setError("Failed to load profile data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // --- Handlers ---
  const handleInputChange = (e:React.FormEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    
    try {
      // REPLACE WITH YOUR ACTUAL PUT/PATCH REQUEST
      // await fetch('/api/client-profile/1', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));

      // Update local state on success
      setClient(prev => ({ ...prev, ...formData }));
      setIsEditing(false);
    } catch (err) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  // --- Render Loading/Error States ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10 p-4 bg-red-50 rounded-xl">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 pt-12 md:pt-22">
      
      {/* Profile Card */}
      <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={client.avatar}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full border border-gray-200 dark:border-zinc-700 object-cover"
        />

        <div className="flex-1 w-full text-center md:text-left">
          {isEditing ? (
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleInputChange}
                className="border dark:border-zinc-700 dark:bg-zinc-800 rounded px-3 py-1.5 w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input 
                type="text" 
                name="company"
                value={formData.company} 
                onChange={handleInputChange}
                className="border dark:border-zinc-700 dark:bg-zinc-800 rounded px-3 py-1.5 w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleInputChange}
                className="border dark:border-zinc-700 dark:bg-zinc-800 rounded px-3 py-1.5 w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <div className="flex gap-2 justify-center md:justify-start mt-2">
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-700 disabled:opacity-50"
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  disabled={isUpdating}
                  className="bg-gray-200 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 px-4 py-2 rounded-xl text-sm hover:bg-gray-300 dark:hover:bg-zinc-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{client.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{client.company}</p>
              <p className="text-sm text-gray-400 mt-0.5">{client.email}</p>
            </>
          )}
        </div>

        {!isEditing && (
          <button 
            onClick={() => {
              setFormData({ name: client.name, company: client.company, email: client.email });
              setIsEditing(true);
            }}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition w-full md:w-auto"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Projects</p>
          <h2 className="text-xl font-bold dark:text-white">{client.projectsSubmitted}</h2>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Completed</p>
          <h2 className="text-xl font-bold dark:text-white">{client.completed}</h2>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">In Progress</p>
          <h2 className="text-xl font-bold dark:text-white">{client.inProgress}</h2>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Total Spent</p>
          <h2 className="text-xl font-bold dark:text-white">{client.totalSpent}</h2>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Start: {project.start}
                </p>
              </div>

              <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end w-full sm:w-auto">
                <p className="text-sm font-medium dark:text-gray-200 sm:mb-2">{project.budget}</p>
                <span className={`text-xs px-3 py-1 rounded-full font-medium
                ${project.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;