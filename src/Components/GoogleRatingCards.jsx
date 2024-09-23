import React from "react";

// Individual Card Component
const GoogleRatingCard = ({ profileImage, name, rating, description }) => {
  const totalStars = 5;

  // Render stars based on the rating value
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-5 h-5 ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.112 6.518a1 1 0 00.95.69h6.647c.969 0 1.372 1.24.588 1.81l-5.386 3.913a1 1 0 00-.364 1.118l2.045 6.307c.287.885-.755 1.614-1.54 1.118l-5.354-3.294a1 1 0 00-1.174 0l-5.354 3.294c-.785.496-1.827-.233-1.54-1.118l2.045-6.307a1 1 0 00-.364-1.118L2.51 11.945c-.784-.57-.38-1.81.588-1.81h6.647a1 1 0 00.95-.69l2.112-6.518z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image */}
      <img
        src={profileImage}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
      />

      {/* Text Content */}
      <div className="flex flex-col">
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* Star Rating */}
        <div className="flex items-center mt-1">{renderStars()}</div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

// Main Component to Display Four Cards
const GoogleRatingCards = () => {
  // Example Data for Four Cards
  const reviewers = [
    {
      profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      rating: 4,
      description: "Great experience with the loan website. Very reliable and fast!",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Jane Smith",
      rating: 5,
      description: "This loan service exceeded my expectations. Highly recommend!",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Mike Johnson",
      rating: 3,
      description: "Decent service but could improve in processing speed.",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
      name: "Sarah Brown",
      rating: 4,
      description: "Very efficient and user-friendly platform for loans.",
    },
  ];

  return (
    <div class="bg-[url('https://images.unsplash.com/photo-1678483790053-71367bc7a02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvb2dsZSUyMHJldmlld3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center h-screen w-full">
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewers.map((reviewer, index) => (
          <GoogleRatingCard
            key={index}
            profileImage={reviewer.profileImage}
            name={reviewer.name}
            rating={reviewer.rating}
            description={reviewer.description}
          />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default GoogleRatingCards;
