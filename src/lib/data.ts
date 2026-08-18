// Palace Church content — pulled from the Palace Church Boston app project.
// Edit freely; this is placeholder/starter content for the website.

export const CHURCH_INFO = {
  name: "Palace Church",
  location: "Stoughton, MA",
  address: "4 Cabot Place, Suite 5, Stoughton, MA 02072",
  phone: "(978) 216-5274",
  email: "church@palacechurch.boston",
  website: "https://palacechurchboston.com",
  instagram: "@palacechurchboston",
};

export const SERVICE_TIMES = [
  { day: "Sunday", time: "10:00 AM", type: "Main Service" },
  { day: "Wednesday", time: "7:00 PM", type: "Bible Study" },
];

export const GROUPS = [
  {
    id: "1",
    name: "Prayer Team",
    leader: "Pastor Eugene",
    day: "Wednesdays",
    time: "8:00 PM",
    location: "Online and In-Person",
    category: "Young Adults",
    description:
      "A tight-knit group studying the book of Acts. Open to all 18–35.",
  },
  {
    id: "2",
    name: "Worship Team",
    leader: "Pastor Akin",
    day: "Wednesdays",
    time: "8:00 PM",
    location: "Church Premises",
    category: "Families",
    description: "Connecting parents and families. Kids welcome!",
  },
  {
    id: "3",
    name: "Intercession Prayer Team",
    leader: "Pastor Ruth",
    day: "Fridays",
    time: "6:30 AM",
    location: "Sanctuary / Online",
    category: "Prayer",
    description: "Early morning prayer before work. Join in person or via Zoom.",
  },
];

export const GIVING_PLATFORMS = [
  {
    id: "cashapp",
    name: "Cash App",
    description: "Send to $Palacechurchboston",
    handle: "$Palacechurchboston",
    url: "https://cash.app/$Palacechurchboston",
  },
  {
    id: "zelle",
    name: "Zelle",
    description: "Send to our registered giving email",
    handle: "gift@palacechurch.boston",
    url: "https://enroll.zellepay.com",
  },
];

export const GIVE_AMOUNTS = [25, 50, 100, 250, 500];

export const GIVE_FUNDS = [
  {
    id: "general",
    label: "General Fund",
    description: "Support all church operations and ministry",
  },
  {
    id: "missions",
    label: "Missions",
    description: "Global outreach and church planting",
  },
  {
    id: "building",
    label: "Building Fund",
    description: "Our future home in Boston",
  },
  {
    id: "benevolence",
    label: "Benevolence",
    description: "Care for those in need in our community",
  },
];
