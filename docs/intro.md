---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **JsonSqlQuery in less than 5 minutes**.

## What is it?

jsonSqlQuery is an app that allows you to query JSON data using SQL. With jsonSqlQuery, you can view the retrieved data in a tabular format.

### How to Use

jsonSqlQuery consists of three main sections: a JSON tree on the left, a JSON input box on the top right, and a SQL input box along with a result pane on the bottom right.

First, you need to enter the JSON data in the input box and click the 'Parse' button. If there are no errors, the data will be updated in the JSON tree on the left. You can now browse through the data using the tree.

Next, you can enter your SQL query in the SQL input box and click the 'Execute' button. The query results will be displayed in the result pane below (note that the SQL query is executed on the data in the left JSON tree, not the JSON input box, so you need to click 'Parse' first to update the tree).



### Toggling Result Display

In the result table, you can set the display mode for each column, currently supporting text display and JSON tree view. Simply click on the table header to select the desired display mode.


The SQL syntax used follows the SQLite syntax. Here are some examples:

examples below is base on the json data:

```json
{
  "teachers": [
    {
      "name": "Andrew Hernandez",
      "id": 1,
      "age": 30,
      "major": "math",
      "gender": "female",
      "book": {
        "name": "Calculus: Early Transcendentals",
        "author": "James Stewart",
        "publishedYear": 2015,
        "pages": 1368,
        "isbn": "978-1285741550",
        "genre": "Mathematics"
      },
      "email": "andrew.hernandez@school.edu",
      "yearsOfExperience": 5,
      "officeLocation": "Building A, Room 102",
      "courses": [
        "Calculus I",
        "Calculus II",
        "Linear Algebra"
      ]
    },
    {
      "name": "Avery Howard",
      "id": 2,
      "age": 32,
      "major": "physics",
      "gender": "female",
      "book": {
        "name": "Introduction to Electrodynamics",
        "author": "David J. Griffiths",
        "publishedYear": 2017,
        "pages": 624,
        "isbn": "978-1108420419",
        "genre": "Physics"
      },
      "email": "avery.howard@school.edu",
      "yearsOfExperience": 8,
      "officeLocation": "Building B, Room 205",
      "courses": [
        "Classical Mechanics",
        "Electromagnetism",
        "Quantum Mechanics"
      ]
    }
  ],
  "students": [
    {
      "teacherId": "1",
      "name": "Olivia Martinez",
      "id": 4,
      "age": 21,
      "gender": "female"
    },
    {
      "name": "Michael Davis",
      "id": 3,
      "age": 19,
      "gender": "male",
      "teacherId": 5
    }
  ]
}
```


select * from root.teachers

select * from root.teachers left join ...

distinct


