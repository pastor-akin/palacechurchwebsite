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

export const APP_LINKS = {
  appStore: "https://apps.apple.com/us/app/palace-church/id6775447385",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.palacechurch.boston",
};

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
    slug: "deliverance",
    title: "Deliverance Ministry",
    summary: "Prayer-focused ministry helping people find freedom in Christ.",
    description:
      "Our Deliverance Ministry, led by Pastor Akin, walks with people seeking freedom from spiritual, emotional, and generational strongholds through prayer and biblical counsel. Because of the personal nature of this ministry, every request begins with a readiness form completed in the Palace Church app, so our team can prepare to meet you well.",
    meetingInfo: "By appointment · Requested through the Palace Church app",
    leader: "Pastor Akin",
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

// Pulled from the Palace Church app's Resources page (app/resources.tsx).
// Real course content lives on palacechurch.boston's "challenge-page" links.
// Access is gated behind an account — guests can see the overview below,
// but need to sign up to actually start a course.
export type CourseStep = {
  title: string;
  content: string;
};

export type CourseModule = {
  title: string;
  steps: CourseStep[];
};

export const COURSES = [
  {
    id: "1",
    title: "Fasting 101",
    description:
      "A brief course examining fasting from a scriptural perspective.",
    badge: "Foundation",
    color: "#7C3AED",
    duration: "10 minutes",
    link: "https://www.palacechurch.boston/challenge-page/89250d65-bb3f-4766-ae38-4da48430c754?programId=89250d65-bb3f-4766-ae38-4da48430c754",
    modules: [
      {
        title: "What Is Fasting?",
        steps: [
          {
            title: "What Is Fasting?",
            content:
              "Fasting is choosing to set aside food — or another regular part of your daily rhythm — for a set time, in order to give your full attention to God. It isn't a hunger strike or a diet plan; it's a spiritual discipline as old as Scripture itself. In Matthew 6:16-18, Jesus assumes His followers will fast — He says “when you fast,” not “if you fast.” Throughout the Bible we see people fast before big decisions, in seasons of repentance, and in pursuit of breakthrough. At its core, fasting says: “God, I want more of You than I want this.”",
          },
        ],
      },
      {
        title: "Why We Fast",
        steps: [
          {
            title: "Why We Fast",
            content:
              "We don't fast to earn God's favor — He already gave us everything through Jesus. We fast to clear away distraction so we can hear Him more clearly. When you set aside food, you create space that hunger normally fills, and you fill that space with prayer and Scripture instead. People throughout the Bible fasted for different reasons: Daniel fasted while seeking wisdom and clarity (Daniel 10), Esther called a fast before a courageous act of faith (Esther 4), and the early church fasted before making major decisions (Acts 13:2-3). Fasting won't change God's mind about you — but it will change how present and attentive you are to Him.",
          },
        ],
      },
      {
        title: "How to Start Fasting",
        steps: [
          {
            title: "How to Start Fasting",
            content:
              "You don't need to fast for 40 days to get started. Begin small: skip one meal, or fast from sunup to sundown for a single day, and use the time you'd normally spend eating to pray or read Scripture instead. Tell someone you trust what you're doing, so they can pray with you and check in on you. If you have a medical condition, are pregnant, or take medication that requires food, talk with your doctor first — fasting can take forms beyond food (social media, TV, and so on), and there's no shame in choosing one that fits your season of life. Whatever you choose, keep the goal in view: this isn't about willpower, it's about making room for God.",
          },
        ],
      },
    ] as CourseModule[],
  },
  {
    id: "2",
    title: "Serving at Palace Church",
    description:
      "Discover your gifts and learn how to lead with integrity, humility, and biblical wisdom.",
    badge: "Volunteers",
    color: "#3B82F6",
    duration: "5 weeks",
    link: "https://www.palacechurch.boston/challenge-page/3d4aa3d3-a230-442d-9851-9d75c6b8502e?programId=3d4aa3d3-a230-442d-9851-9d75c6b8502e",
    modules: [
      {
        title: "The Purpose of Serving",
        steps: [
          {
            title: "Why We Serve",
            content:
              "Jesus said He “did not come to be served, but to serve” (Mark 10:45) — and He calls us to follow that same pattern. Serving at Palace Church isn't about filling a schedule or earning a badge; it's about reflecting the heart of Jesus to everyone who walks through our doors. When you serve, you become part of someone else's story — the greeter who makes a first-time guest feel welcome, the parking team member who makes Sunday morning less stressful, the kids' volunteer who helps a child feel safe and loved. Every role matters because every person matters to God.",
          },
          {
            title: "Serving as Worship",
            content:
              "Serving isn't separate from worship — it is worship. Romans 12:1 calls us to offer our bodies as “a living sacrifice,” which is our “true and proper worship.” That means the way you set up chairs, greet a stranger, or hold a baby in the nursery can be just as much an act of worship as singing on a Sunday morning. When you serve with the right heart, you're not doing a task for the church — you're offering something to God.",
          },
          {
            title: "Discovering Your Gifts",
            content:
              "God has given every believer at least one spiritual gift to build up the church (1 Peter 4:10). Some are gifted to teach, others to lead, others to show mercy, others to organize behind the scenes. Part of growing as a volunteer at Palace Church is discovering what you're gifted at — and just as importantly, what you're not — so you can serve in a place where you'll thrive rather than burn out. If you're not sure what your gifts are, ask a leader or team member who knows you well; they often see it before you do.",
          },
        ],
      },
      {
        title: "Working as a Team",
        steps: [
          {
            title: "One Body, Many Parts",
            content:
              "1 Corinthians 12 describes the church as one body with many different parts — an eye, a hand, a foot — each necessary, none more important than another. No volunteer team at Palace Church operates alone. The greeters need the parking team, the worship team needs the sound team, the kids' ministry needs the check-in team. Serving well means valuing every teammate's role as much as your own, communicating clearly, showing up on time, and being quick to help wherever the need is greatest that week — even outside your usual role.",
          },
        ],
      },
      {
        title: "Serving with Joy",
        steps: [
          {
            title: "Serving Without Burnout",
            content:
              "Even good things can wear us out if we're not careful. Jesus modeled a rhythm of ministry and rest — He withdrew to quiet places to pray, even when crowds were waiting for Him (Luke 5:16). As a volunteer, it's healthy to serve on a sustainable schedule, take breaks when you need them, and communicate with your team leader if you're feeling stretched thin. Serving from a place of rest and joy — not obligation or guilt — is what keeps a ministry healthy for the long run.",
          },
          {
            title: "Serving Under Authority",
            content:
              "Every ministry team at Palace Church operates under the leadership of a team lead or pastor, and every team lead operates under the leadership of the church. This isn't about control — it's about protection. Good, godly authority creates a safe environment where volunteers are cared for and guests are served well. Philippians 2:3-4 calls us to consider others' interests above our own; part of serving well is trusting your team leader's direction, even when you might do things differently, and raising concerns respectfully rather than working around leadership.",
          },
          {
            title: "Serving with Excellence",
            content:
              "Colossians 3:23 says, “whatever you do, work at it with all your heart, as working for the Lord.” Excellence isn't about perfectionism — it's about giving your best because you're serving Jesus, not just people. That might mean showing up a few minutes early, following through on a commitment even when you don't feel like it, or double-checking the details on a Sunday setup. Excellence honors God and it honors the people you're serving.",
          },
          {
            title: "Becoming a Certified Volunteer",
            content:
              "Completing this course is the first step toward becoming a Certified Palace Church Volunteer. Certification means you've been equipped with the heart, the biblical foundation, and the practical expectations for serving well on any team at Palace Church. Once you finish this course, sign up for a free account to track your progress, and a member of our team will follow up with you about placing you on a ministry team that fits how God has gifted you.",
          },
        ],
      },
    ] as CourseModule[],
  },
  {
    id: "3",
    title: "Christian 101 + Baptism",
    description:
      "Biblical foundations for new believers, plus everything you need to know about baptism at Palace Church.",
    badge: "Foundation",
    color: "#10B981",
    link: "https://www.palacechurch.boston/challenge-page/55a93a56-b015-42a2-92b0-08fae86da3f7?programId=55a93a56-b015-42a2-92b0-08fae86da3f7",
  },
  {
    id: "4",
    title: "Child Safe Class",
    description:
      "Required training for anyone serving in Palace Kidz, covering our child safety policies and procedures.",
    badge: "Children",
    color: "#EC4899",
    link: "https://www.palacechurch.boston/challenge-page/c2523d00-6bb8-4ac8-ab71-c6ec413f7531?programId=c2523d00-6bb8-4ac8-ab71-c6ec413f7531",
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
