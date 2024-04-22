"use strict";(self.webpackChunkjson_sql_query_doc=self.webpackChunkjson_sql_query_doc||[]).push([[976],{1512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(4848),a=t(8453);const r={sidebar_position:1},o="Tutorial Intro",i={id:"intro",title:"Tutorial Intro",description:"Let's discover JsonSqlQuery in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},l={},d=[{value:"What is it?",id:"what-is-it",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Toggling Result Display",id:"toggling-result-display",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tutorial-intro",children:"Tutorial Intro"}),"\n",(0,s.jsxs)(n.p,{children:["Let's discover ",(0,s.jsx)(n.strong,{children:"JsonSqlQuery in less than 5 minutes"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-it",children:"What is it?"}),"\n",(0,s.jsx)(n.p,{children:"jsonSqlQuery is an app that allows you to query JSON data using SQL. With jsonSqlQuery, you can view the retrieved data in a tabular format."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(n.p,{children:"jsonSqlQuery consists of three main sections: a JSON tree on the left, a JSON input box on the top right, and a SQL input box along with a result pane on the bottom right."}),"\n",(0,s.jsx)(n.p,{children:"First, you need to enter the JSON data in the input box and click the 'Parse' button. If there are no errors, the data will be updated in the JSON tree on the left. You can now browse through the data using the tree."}),"\n",(0,s.jsx)(n.p,{children:"Next, you can enter your SQL query in the SQL input box and click the 'Execute' button. The query results will be displayed in the result pane below (note that the SQL query is executed on the data in the left JSON tree, not the JSON input box, so you need to click 'Parse' first to update the tree)."}),"\n",(0,s.jsx)(n.h3,{id:"toggling-result-display",children:"Toggling Result Display"}),"\n",(0,s.jsx)(n.p,{children:"In the result table, you can set the display mode for each column, currently supporting text display and JSON tree view. Simply click on the table header to select the desired display mode."}),"\n",(0,s.jsx)(n.p,{children:"The SQL syntax used follows the SQLite syntax. Here are some examples:"}),"\n",(0,s.jsx)(n.p,{children:"examples below is base on the json data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "teachers": [\n    {\n      "name": "Andrew Hernandez",\n      "id": 1,\n      "age": 30,\n      "major": "math",\n      "gender": "female",\n      "book": {\n        "name": "Calculus: Early Transcendentals",\n        "author": "James Stewart",\n        "publishedYear": 2015,\n        "pages": 1368,\n        "isbn": "978-1285741550",\n        "genre": "Mathematics"\n      },\n      "email": "andrew.hernandez@school.edu",\n      "yearsOfExperience": 5,\n      "officeLocation": "Building A, Room 102",\n      "courses": [\n        "Calculus I",\n        "Calculus II",\n        "Linear Algebra"\n      ]\n    },\n    {\n      "name": "Avery Howard",\n      "id": 2,\n      "age": 32,\n      "major": "physics",\n      "gender": "female",\n      "book": {\n        "name": "Introduction to Electrodynamics",\n        "author": "David J. Griffiths",\n        "publishedYear": 2017,\n        "pages": 624,\n        "isbn": "978-1108420419",\n        "genre": "Physics"\n      },\n      "email": "avery.howard@school.edu",\n      "yearsOfExperience": 8,\n      "officeLocation": "Building B, Room 205",\n      "courses": [\n        "Classical Mechanics",\n        "Electromagnetism",\n        "Quantum Mechanics"\n      ]\n    }\n  ],\n  "students": [\n    {\n      "teacherId": 1,\n      "name": "Olivia Martinez",\n      "id": 4,\n      "age": 21,\n      "gender": "female"\n    },\n    {\n      "name": "Michael Davis",\n      "id": 3,\n      "age": 19,\n      "gender": "male",\n      "teacherId": 2\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"select * from root.teachers"}),"\n",(0,s.jsx)(n.p,{children:"select tea.name,tea.email from root.teachers as tea"}),"\n",(0,s.jsx)(n.p,{children:"select tea.name as teacherName,stu.name from root.teachers as tea left join root.students as stu on stu.teacherId = tea.id"}),"\n",(0,s.jsx)(n.p,{children:"select * from root.teachers where name like 'Avery%'"}),"\n",(0,s.jsx)(n.p,{children:"distinct"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);