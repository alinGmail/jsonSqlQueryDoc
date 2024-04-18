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

select * from root.teachers

select * from root.teachers left join ...

distinct

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
