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

export const MINISTRIES = [
  {
    slug: "prayer",
    title: "Prayer Ministry",
    summary: "Intercession and prayer teams covering our church and city.",
    description:
      "Our Prayer Ministry exists to seek God on behalf of our church, our city, and the nations. Whether it's early morning intercession, corporate prayer nights, or standing with someone through a personal need, this team believes prayer changes things.",
    meetingInfo: "Fridays · 6:30 AM · Sanctuary / Online",
    leader: "Pastor Ruth",
    hasVideo: false,
  },
  {
    slug: "worship",
    title: "Worship Ministry",
    summary: "Leading our church into God's presence through music.",
    description:
      "The Worship Ministry leads Palace Church into God's presence through music, creativity, and excellence. If you sing, play an instrument, or serve on production, there's a place for you on this team.",
    meetingInfo: "Wednesdays · 8:00 PM · Church Premises",
    leader: "Pastor Akin",
    hasVideo: true,
  },
  {
    slug: "childrens",
    title: "Children's Ministry",
    summary: "A safe, fun place for kids to know and love Jesus.",
    description:
      "Our Children's Ministry gives kids a safe, fun, age-appropriate environment to learn about Jesus every Sunday. Trained volunteers lead worship, lessons, and activities so parents can enjoy the service knowing their kids are cared for.",
    meetingInfo: "Sundays · 10:00 AM · Kids Wing",
    leader: "",
    hasVideo: false,
  },
  {
    slug: "young-adults",
    title: "Young Adults",
    summary: "Building community for young adults chasing purpose.",
    description:
      "Young Adults is a community for anyone in their late teens through thirties chasing purpose, navigating life transitions, and growing in faith together — through weekly gatherings, prayer, and friendship.",
    meetingInfo: "Wednesdays · 8:00 PM · Online and In-Person",
    leader: "Pastor Eugene",
    hasVideo: false,
  },
  {
    slug: "outreach",
    title: "Outreach",
    summary: "Serving and loving our neighbors in Stoughton and beyond.",
    description:
      "Outreach is how Palace Church puts love into action — serving our neighbors in Stoughton through food drives, community events, and partnerships with local organizations.",
    meetingInfo: "Monthly · Various Locations",
    leader: "",
    hasVideo: false,
  },
  {
    slug: "families",
    title: "Families",
    summary:
      "Resources and community to help families grow in faith together.",
    description:
      "The Families ministry connects parents and caregivers with resources, community, and encouragement to help their households grow in faith together, at every stage of life.",
    meetingInfo: "Wednesdays · 8:00 PM · Church Premises",
    leader: "Pastor Akin",
    hasVideo: false,
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
