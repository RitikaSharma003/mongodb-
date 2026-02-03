
 // This deletes the existing collection so you can start over
use('employees'); // Replace with your DB name

// db.departments.insertMany([
//   {
//     "_id": ObjectId("66a2354679c0c8f6a2470f93"),
//     "deptNo": 10,
//     "dName": "accounting",
//     "loc": "new york",
//     "budget": 150000,
//     "established": ISODate("1975-01-15T00:00:00.000Z"),
//     "floor": 5,
//     "employeeCount": 3,
//     "isActive": true,
//     "facilities": ["conference_room", "printer", "coffee_machine"],
//     "headOfDept": 7782
//   },
//   {
//     "_id": ObjectId("66a2354679c0c8f6a2470f94"),
//     "deptNo": 20,
//     "dName": "research",
//     "loc": "dallas",
//     "budget": 200000,
//     "established": ISODate("1973-05-20T00:00:00.000Z"),
//     "floor": 3,
//     "employeeCount": 5,
//     "isActive": true,
//     "facilities": ["lab", "conference_room", "library"],
//     "headOfDept": 7566
//   },
//   {
//     "_id": ObjectId("66a2354679c0c8f6a2470f95"),
//     "deptNo": 30,
//     "dName": "sales",
//     "loc": "chicago",
//     "budget": 180000,
//     "established": ISODate("1974-08-10T00:00:00.000Z"),
//     "floor": 2,
//     "employeeCount": 6,
//     "isActive": true,
//     "facilities": ["meeting_room", "call_center"],
//     "headOfDept": 7698
//   },
//   {
//     "_id": ObjectId("66a2354679c0c8f6a2470f96"),
//     "deptNo": 40,
//     "dName": "operation",
//     "loc": "boston",
//     "budget": 120000,
//     "established": ISODate("1976-03-25T00:00:00.000Z"),
//     "floor": 1,
//     "employeeCount": 0,
//     "isActive": false,
//     "facilities": ["storage", "loading_dock"],
//     "headOfDept": null
//   }
// ]);

// db.students.insertMany([
//   {
//     name: "Aman Sharma",
//     age: 22,
//     city: "Delhi",
//     courses: [
//       { subject: "Math", marks: 85, semester: 1, grade: "A", credits: 4 },
//       { subject: "Physics", marks: 72, semester: 1, grade: "B", credits: 3 },
//       { subject: "Math", marks: 90, semester: 2, grade: "A+", credits: 4 },
//       { subject: "Chemistry", marks: 68, semester: 2, grade: "B", credits: 3 },
//       { subject: "Math", marks: 45, semester: 3, grade: "F", credits: 4 }
//     ],
//     scholarships: [
//       { name: "Merit Scholarship", amount: 50000, year: 2023 },
//       { name: "Sports Scholarship", amount: 20000, year: 2024 }
//     ]
//   },
//   {
//     name: "Rohit Verma",
//     age: 23,
//     city: "Mumbai",
//     courses: [
//       { subject: "Math", marks: 60, semester: 1, grade: "C", credits: 4 },
//       { subject: "Chemistry", marks: 88, semester: 1, grade: "A", credits: 3 },
//       { subject: "Physics", marks: 55, semester: 2, grade: "D", credits: 3 },
//       { subject: "Math", marks: 92, semester: 2, grade: "A+", credits: 4 }
//     ],
//     scholarships: [
//       { name: "Need-based Aid", amount: 30000, year: 2023 }
//     ]
//   },
//   {
//     name: "Neha Singh",
//     age: 21,
//     city: "Bangalore",
//     courses: [
//       { subject: "Physics", marks: 91, semester: 1, grade: "A+", credits: 3 },
//       { subject: "Math", marks: 78, semester: 1, grade: "B+", credits: 4 },
//       { subject: "Chemistry", marks: 85, semester: 2, grade: "A", credits: 3 },
//       { subject: "Physics", marks: 88, semester: 2, grade: "A", credits: 3 }
//     ],
//     scholarships: [
//       { name: "Merit Scholarship", amount: 50000, year: 2023 },
//       { name: "Research Grant", amount: 75000, year: 2024 }
//     ]
//   },
//   {
//     name: "Priya Gupta",
//     age: 20,
//     city: "Delhi",
//     courses: [
//       { subject: "Math", marks: 95, semester: 1, grade: "A+", credits: 4 },
//       { subject: "Physics", marks: 89, semester: 1, grade: "A", credits: 3 },
//       { subject: "Math", marks: 88, semester: 2, grade: "A", credits: 4 },
//       { subject: "Chemistry", marks: 92, semester: 2, grade: "A+", credits: 3 }
//     ],
//     scholarships: []
//   },
//   {
//     name: "Vikram Rao",
//     age: 24,
//     city: "Pune",
//     courses: [
//       { subject: "Chemistry", marks: 45, semester: 1, grade: "F", credits: 3 },
//       { subject: "Physics", marks: 50, semester: 1, grade: "D", credits: 3 },
//       { subject: "Math", marks: 55, semester: 2, grade: "D", credits: 4 },
//       { subject: "Chemistry", marks: 82, semester: 2, grade: "A-", credits: 3 }
//     ],
//     scholarships: [
//       { name: "Second Chance Program", amount: 15000, year: 2024 }
//     ]
//   },
//   {
//     name: "Anjali Reddy",
//     age: 22,
//     city: "Hyderabad",
//     courses: [
//       { subject: "Math", marks: 76, semester: 1, grade: "B+", credits: 4 },
//       { subject: "Chemistry", marks: 91, semester: 1, grade: "A+", credits: 3 },
//       { subject: "Physics", marks: 84, semester: 2, grade: "A", credits: 3 },
//       { subject: "Math", marks: 65, semester: 2, grade: "C", credits: 4 },
//       { subject: "Math", marks: 88, semester: 3, grade: "A", credits: 4 }
//     ],
//     scholarships: [
//       { name: "Merit Scholarship", amount: 50000, year: 2023 }
//     ]
//   }
// ]);



// db.users.insertMany([
//   {
//     name: "Rajesh Kumar",
//     age: 32,
//     currentCompany: "Amazon",
//     totalExperience: 10,
//     experience: [
//       {
//         company: "TCS",
//         duration: 24,
//         role: "Developer",
//         salary: 400000,
//         rating: 3.5,
//       },
//       {
//         company: "Infosys",
//         duration: 36,
//         role: "Senior Developer",
//         salary: 800000,
//         rating: 4.2,
//       },
//       {
//         company: "Amazon",
//         duration: 18,
//         role: "Tech Lead",
//         salary: 2500000,
//         rating: 4.8,
//       },
//     ],
//   },
//   {
//     name: "Priya Sharma",
//     age: 28,
//     currentCompany: "Google",
//     totalExperience: 6,
//     experience: [
//       {
//         company: "Wipro",
//         duration: 18,
//         role: "Developer",
//         salary: 450000,
//         rating: 3.8,
//       },
//       {
//         company: "Microsoft",
//         duration: 24,
//         role: "SDE-2",
//         salary: 1800000,
//         rating: 4.5,
//       },
//       {
//         company: "Google",
//         duration: 12,
//         role: "Senior Engineer",
//         salary: 3200000,
//         rating: 4.9,
//       },
//     ],
//   },
//   {
//     name: "Amit Verma",
//     age: 35,
//     currentCompany: "Flipkart",
//     totalExperience: 12,
//     experience: [
//       {
//         company: "Accenture",
//         duration: 30,
//         role: "Analyst",
//         salary: 350000,
//         rating: 3.2,
//       },
//       {
//         company: "Capgemini",
//         duration: 36,
//         role: "Consultant",
//         salary: 700000,
//         rating: 3.9,
//       },
//       {
//         company: "Flipkart",
//         duration: 18,
//         role: "Product Manager",
//         salary: 2200000,
//         rating: 4.6,
//       },
//     ],
//   },
//   {
//     name: "Sneha Reddy",
//     age: 30,
//     currentCompany: "Microsoft",
//     totalExperience: 8,
//     experience: [
//       {
//         company: "TCS",
//         duration: 24,
//         role: "Developer",
//         salary: 420000,
//         rating: 3.6,
//       },
//       {
//         company: "Amazon",
//         duration: 30,
//         role: "SDE-2",
//         salary: 1600000,
//         rating: 4.4,
//       },
//       {
//         company: "Microsoft",
//         duration: 12,
//         role: "Senior SDE",
//         salary: 2800000,
//         rating: 4.7,
//       },
//     ],
//   },
//   {
//     name: "Vikram Singh",
//     age: 26,
//     currentCompany: "Infosys",
//     totalExperience: 4,
//     experience: [
//       {
//         company: "Cognizant",
//         duration: 18,
//         role: "Junior Developer",
//         salary: 380000,
//         rating: 3.4,
//       },
//       {
//         company: "Infosys",
//         duration: 24,
//         role: "Developer",
//         salary: 650000,
//         rating: 4.0,
//       },
//     ],
//   },
//   {
//     name: "Ananya Iyer",
//     age: 33,
//     currentCompany: "Netflix",
//     totalExperience: 11,
//     experience: [
//       {
//         company: "Wipro",
//         duration: 24,
//         role: "Developer",
//         salary: 400000,
//         rating: 3.5,
//       },
//       {
//         company: "Adobe",
//         duration: 36,
//         role: "Senior Developer",
//         salary: 1500000,
//         rating: 4.3,
//       },
//       {
//         company: "Netflix",
//         duration: 18,
//         role: "Staff Engineer",
//         salary: 4000000,
//         rating: 4.9,
//       },
//     ],
//   },
//   {
//     name: "Rohit Malhotra",
//     age: 29,
//     currentCompany: "Paytm",
//     totalExperience: 7,
//     experience: [
//       {
//         company: "HCL",
//         duration: 20,
//         role: "Developer",
//         salary: 360000,
//         rating: 3.3,
//       },
//       {
//         company: "Swiggy",
//         duration: 28,
//         role: "Backend Developer",
//         salary: 1100000,
//         rating: 4.1,
//       },
//       {
//         company: "Paytm",
//         duration: 14,
//         role: "Senior Developer",
//         salary: 1800000,
//         rating: 4.5,
//       },
//     ],
//   },
//   {
//     name: "Kavya Nair",
//     age: 31,
//     currentCompany: "Uber",
//     totalExperience: 9,
//     experience: [
//       {
//         company: "Infosys",
//         duration: 30,
//         role: "Developer",
//         salary: 500000,
//         rating: 3.7,
//       },
//       {
//         company: "Ola",
//         duration: 24,
//         role: "Senior Developer",
//         salary: 1300000,
//         rating: 4.2,
//       },
//       {
//         company: "Uber",
//         duration: 18,
//         role: "Tech Lead",
//         salary: 3500000,
//         rating: 4.8,
//       },
//     ],
//   },
//   {
//     name: "Arjun Kapoor",
//     age: 27,
//     currentCompany: "Zomato",
//     totalExperience: 5,
//     experience: [
//       {
//         company: "Tech Mahindra",
//         duration: 18,
//         role: "Junior Developer",
//         salary: 340000,
//         rating: 3.2,
//       },
//       {
//         company: "Myntra",
//         duration: 20,
//         role: "Developer",
//         salary: 900000,
//         rating: 4.0,
//       },
//       {
//         company: "Zomato",
//         duration: 10,
//         role: "SDE-2",
//         salary: 1600000,
//         rating: 4.4,
//       },
//     ],
//   },
//   {
//     name: "Divya Menon",
//     age: 34,
//     currentCompany: "Oracle",
//     totalExperience: 12,
//     experience: [
//       {
//         company: "Accenture",
//         duration: 36,
//         role: "Analyst",
//         salary: 380000,
//         rating: 3.4,
//       },
//       {
//         company: "SAP",
//         duration: 30,
//         role: "Consultant",
//         salary: 1200000,
//         rating: 4.1,
//       },
//       {
//         company: "Oracle",
//         duration: 24,
//         role: "Senior Consultant",
//         salary: 2000000,
//         rating: 4.5,
//       },
//     ],
//   },
//   {
//     name: "Karthik Bose",
//     age: 28,
//     currentCompany: "PhonePe",
//     totalExperience: 6,
//     experience: [
//       {
//         company: "Cognizant",
//         duration: 24,
//         role: "Developer",
//         salary: 420000,
//         rating: 3.6,
//       },
//       {
//         company: "Razorpay",
//         duration: 20,
//         role: "Backend Engineer",
//         salary: 1400000,
//         rating: 4.3,
//       },
//       {
//         company: "PhonePe",
//         duration: 12,
//         role: "Senior Engineer",
//         salary: 2400000,
//         rating: 4.7,
//       },
//     ],
//   },
//   {
//     name: "Meera Joshi",
//     age: 30,
//     currentCompany: "Salesforce",
//     totalExperience: 8,
//     experience: [
//       {
//         company: "TCS",
//         duration: 28,
//         role: "Developer",
//         salary: 410000,
//         rating: 3.5,
//       },
//       {
//         company: "Deloitte",
//         duration: 26,
//         role: "Consultant",
//         salary: 1100000,
//         rating: 4.2,
//       },
//       {
//         company: "Salesforce",
//         duration: 14,
//         role: "Lead Developer",
//         salary: 2600000,
//         rating: 4.6,
//       },
//     ],
//   },
//   {
//     name: "Siddharth Rao",
//     age: 25,
//     currentCompany: "Freshworks",
//     totalExperience: 3,
//     experience: [
//       {
//         company: "Wipro",
//         duration: 15,
//         role: "Junior Developer",
//         salary: 350000,
//         rating: 3.3,
//       },
//       {
//         company: "Freshworks",
//         duration: 18,
//         role: "Developer",
//         salary: 800000,
//         rating: 4.1,
//       },
//     ],
//   },
//   {
//     name: "Pooja Gupta",
//     age: 32,
//     currentCompany: "LinkedIn",
//     totalExperience: 10,
//     experience: [
//       {
//         company: "HCL",
//         duration: 24,
//         role: "Developer",
//         salary: 390000,
//         rating: 3.4,
//       },
//       {
//         company: "Snapdeal",
//         duration: 30,
//         role: "Senior Developer",
//         salary: 1000000,
//         rating: 4.0,
//       },
//       {
//         company: "LinkedIn",
//         duration: 22,
//         role: "Staff Engineer",
//         salary: 3800000,
//         rating: 4.8,
//       },
//     ],
//   },
//   {
//     name: "Aditya Khanna",
//     age: 29,
//     currentCompany: "Adobe",
//     totalExperience: 7,
//     experience: [
//       {
//         company: "Infosys",
//         duration: 26,
//         role: "Developer",
//         salary: 480000,
//         rating: 3.7,
//       },
//       {
//         company: "Intuit",
//         duration: 22,
//         role: "SDE-2",
//         salary: 1700000,
//         rating: 4.4,
//       },
//       {
//         company: "Adobe",
//         duration: 14,
//         role: "Senior Engineer",
//         salary: 2900000,
//         rating: 4.7,
//       },
//     ],
//   },
// ]);





// db.employee.insertMany([
//   {
//     "_id": ObjectId("66a23517b5c6990483c4e49b"),
//     "empNo": 7369,
//     "empName": "smith",
//     "job": "clerk",
//     "mgr": 7902,
//     "hireDate": new Date("1980-12-16T18:30:00.000Z"),
//     "sal": 1100,
//     "comm": 0,
//     "deptNo": 20,
//     "age": 23,
//     "totalHoursWorked": 1920,
//     "city": "Noida",
//     "bonus": 500,
//     "havingInsurance": true,
//     "skills": ["sql", "excel"],
//     "education": "bachelor",
//     "performance": {
//       "rating": 3.5,
//       "lastReviewDate": new Date("2024-06-15T00:00:00.000Z"),
//       "reviewedBy": 7902
//     },
//     "projects": ["project_alpha"],
//     "isRemote": false,
//     "certifications": ["SQL Basics"],
//     "languages": ["English", "Hindi"],
//     "experience": 3.5
//   },
//   {
//     "_id": ObjectId("66a23517b5c6990483c4e49c"),
//     "empNo": 7499,
//     "empName": "allen",
//     "job": "salesman",
//     "mgr": 7698,
//     "hireDate": new Date("1981-02-19T18:30:00.000Z"),
//     "sal": 1600,
//     "comm": 300,
//     "deptNo": 30,
//     "age": 28,
//     "totalHoursWorked": 1850,
//     "city": "Chicago",
//     "bonus": 800,
//     "havingInsurance": true,
//     "skills": ["html", "sales", "negotiation"],
//     "education": "bachelor",
//     "performance": {
//       "rating": 4.0,
//       "lastReviewDate": new Date("2024-05-20T00:00:00.000Z"),
//       "reviewedBy": 7698
//     },
//     "projects": ["sales_campaign_q1", "sales_campaign_q2"],
//     "isRemote": false,
//     "certifications": ["Sales Pro", "Negotiation Master"],
//     "languages": ["English"],
//     "experience": 7.2,
//     "territory": "Midwest"
//   }
//   // Apply the same pattern (ObjectId and new Date) to the remaining documents...
// ]);


db.departments.insertMany([
  [
  {
    "_id": { "$oid": "66a2354679c0c8f6a2470f93" },
    "dept": 10,
    "dName": "accounting",
    "loc": "new york",
    "budget": 150000,
    "established": { "$date": "1975-01-15T00:00:00.000Z" },
    "floor": 5,
    "employeeCount": 3,
    "isActive": true,
    "facilities": ["conference_room", "printer", "coffee_machine"],
    "headOfDept": 7782,
    "annualRevenue": 500000,
    "costCenter": "CC-010",
    "region": "Northeast",
    "teamLeads": [7782],
    "officeType": "corporate"
  },
  {
    "_id": { "$oid": "66a2354679c0c8f6a2470f94" },
    "dept": 20,
    "dName": "research",
    "loc": "dallas",
    "budget": 200000,
    "established": { "$date": "1973-05-20T00:00:00.000Z" },
    "floor": 3,
    "employeeCount": 5,
    "isActive": true,
    "facilities": ["lab", "conference_room", "library"],
    "headOfDept": 7566,
    "annualRevenue": 0,
    "costCenter": "CC-020",
    "region": "South",
    "teamLeads": [7566, 7788, 7902],
    "officeType": "research_center"
  },
  {
    "_id": { "$oid": "66a2354679c0c8f6a2470f95" },
    "dept": 30,
    "dName": "sales",
    "loc": "chicago",
    "budget": 180000,
    "established": { "$date": "1974-08-10T00:00:00.000Z" },
    "floor": 2,
    "employeeCount": 6,
    "isActive": true,
    "facilities": ["meeting_room", "call_center"],
    "headOfDept": 7698,
    "annualRevenue": 2500000,
    "costCenter": "CC-030",
    "region": "Midwest",
    "teamLeads": [7698],
    "officeType": "sales_office",
    "territories": ["Midwest", "Central", "Northeast", "West"]
  },
  {
    "_id": { "$oid": "66a2354679c0c8f6a2470f96" },
    "dept": 40,
    "dName": "operation",
    "loc": "boston",
    "budget": 120000,
    "established": { "$date": "1976-03-25T00:00:00.000Z" },
    "floor": 1,
    "employeeCount": 0,
    "isActive": false,
    "facilities": ["storage", "loading_dock"],
    "headOfDept": null,
    "annualRevenue": 0,
    "costCenter": "CC-040",
    "region": "Northeast",
    "teamLeads": [],
    "officeType": "warehouse"
  },
  {
    "_id": { "$oid": "66a2354679c0c8f6a2470f97" },
    "dept": 50,
    "dName": "IT",
    "loc": "san francisco",
    "budget": 250000,
    "established": { "$date": "2010-06-01T00:00:00.000Z" },
    "floor": 4,
    "employeeCount": 0,
    "isActive": true,
    "facilities": ["server_room", "conference_room", "printer", "coffee_machine"],
    "headOfDept": null,
    "annualRevenue": 0,
    "costCenter": "CC-050",
    "region": "West",
    "teamLeads": [],
    "officeType": "tech_hub"
  }
]

])