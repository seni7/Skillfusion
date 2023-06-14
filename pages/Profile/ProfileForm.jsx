import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    father_name: '',
    last_name: '',
    gender: '',
    phone_number: '',
    region: '',
    city: '',
    sub_city: '',
    district: '',
    kebele: '',
    house_number: '',
    is_organization: '',
    name: '',
    photo: null,
    front: null,
    back: null,
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileData = new FormData();
    profileData.append('first_name', formData.first_name);
    profileData.append('father_name', formData.father_name);
    profileData.append('last_name', formData.last_name);
    profileData.append('gender', formData.gender);
    profileData.append('phone_number', formData.phone_number);
    profileData.append('region', formData.region);
    profileData.append('city', formData.city);
    profileData.append('sub_city', formData.sub_city);
    profileData.append('district', formData.district);
    profileData.append('kebele', formData.kebele);
    profileData.append('house_number', formData.house_number);
    profileData.append('is_organization', formData.is_organization);
    profileData.append('name', formData.name);
    profileData.append('photo', formData.photo);
    profileData.append('front', formData.front);
    profileData.append('back', formData.back);

    // Send the form data to the backend using an HTTP request (e.g., Axios)
    console.log(profileData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="first_name" className="block mb-2 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="father_name" className="block mb-2 font-medium">
            Father Name
          </label>
          <input
            type="text"
            id="father_name"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Add other fields here */}

        <div className="mb-4">
          <label htmlFor="photo" className="block mb-2 font-medium">
            Profile Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="front" className="block mb-2 font-medium">
            Front Attachment
          </label>
          <input
            type="file"
            id="front"
            name="front"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="back" className="block mb-2 font-medium">
            Back Attachment
          </label>
          <input
            type="file"
            id="back"
            name="back"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
