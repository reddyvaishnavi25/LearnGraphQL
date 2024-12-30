// Users Collection
const users = [
    {
      id: "1",
      username: "john_doe",
      name: "John Doe",
      email: "john.doe@example.com",
      bio: "Love coding and coffee!",
      followers: ["2", "3"],
      following: ["2"],
    },
    {
      id: "2",
      username: "jane_smith",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      bio: "Traveler. Blogger. Dreamer.",
      followers: ["1"],
      following: ["1", "3"],
    },
    {
      id: "3",
      username: "mike89",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      bio: "Tech enthusiast. Gamer.",
      followers: ["1", "2"],
      following: [],
    },
    {
      id: "4",
      username: "sarah_connor",
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
      bio: "Fitness coach. Motivational speaker.",
      followers: ["3"],
      following: ["1", "3"],
    },
    {
      id: "5",
      username: "emma_brown",
      name: "Emma Brown",
      email: "emma.brown@example.com",
      bio: "Artist. Photographer.",
      followers: ["1", "4"],
      following: ["2", "3"],
    },
  ];
  
  // Posts Collection
  const posts = [
    {
      id: "101",
      userId: "1",
      content: "Hello World!",
      createdAt: "2024-01-01T10:00:00Z",
    },
    {
      id: "102",
      userId: "1",
      content: "GraphQL is amazing!",
      createdAt: "2024-01-02T11:00:00Z",
    },
    {
      id: "103",
      userId: "2",
      content: "Exploring the mountains!",
      createdAt: "2024-01-03T09:00:00Z",
    },
    {
      id: "104",
      userId: "3",
      content: "Just completed a marathon!",
      createdAt: "2024-01-04T08:00:00Z",
    },
    {
      id: "105",
      userId: "4",
      content: "Healthy living is a lifestyle!",
      createdAt: "2024-01-05T07:00:00Z",
    },
  ];
  
  // Comments Collection
  const comments = [
    { id: "201", postId: "101", userId: "2", content: "Nice post, John!", createdAt: "2024-01-01T10:30:00Z" },
    { id: "202", postId: "101", userId: "3", content: "Totally agree!", createdAt: "2024-01-01T10:45:00Z" },
    { id: "203", postId: "102", userId: "4", content: "GraphQL is the best!", createdAt: "2024-01-02T11:30:00Z" },
    { id: "204", postId: "103", userId: "1", content: "Beautiful view!", createdAt: "2024-01-03T09:30:00Z" },
    { id: "205", postId: "105", userId: "2", content: "Great advice, Sarah!", createdAt: "2024-01-05T07:30:00Z" },
  ];
  
  // Likes Collection
  const likes = [
    { id: "301", postId: "101", userId: "2", createdAt: "2024-01-01T10:15:00Z" },
    { id: "302", postId: "101", userId: "3", createdAt: "2024-01-01T10:20:00Z" },
    { id: "303", postId: "102", userId: "4", createdAt: "2024-01-02T11:15:00Z" },
    { id: "304", postId: "103", userId: "1", createdAt: "2024-01-03T09:15:00Z" },
    { id: "305", postId: "105", userId: "3", createdAt: "2024-01-05T07:15:00Z" },
  ];
  
  // Messages Collection (Optional if you plan to include messaging)
  const messages = [
    { id: "401", senderId: "1", receiverId: "2", content: "Hi Jane!", createdAt: "2024-01-06T12:00:00Z" },
    { id: "402", senderId: "2", receiverId: "1", content: "Hello John!", createdAt: "2024-01-06T12:05:00Z" },
    { id: "403", senderId: "3", receiverId: "4", content: "Great post, Sarah!", createdAt: "2024-01-06T12:10:00Z" },
  ];
  
  // Notifications Collection (Optional)
  const notifications = [
    { id: "501", userId: "1", type: "like", postId: "101", actorId: "2", createdAt: "2024-01-01T10:15:00Z" },
    { id: "502", userId: "1", type: "comment", postId: "101", actorId: "3", createdAt: "2024-01-01T10:45:00Z" },
  ];

  

  module.exports = { users, posts, comments, likes , notifications, messages};