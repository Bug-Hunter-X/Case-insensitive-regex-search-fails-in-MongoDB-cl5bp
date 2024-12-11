# Case-Insensitive Regex Search Issue in MongoDB

This repository demonstrates a common issue encountered when performing case-insensitive regular expression searches in MongoDB using Node.js.  The provided code attempts to find documents where the `name` field matches 'John', regardless of case.  However, the query unexpectedly returns no results.

The solution highlights the correct way to construct the query to achieve case-insensitive matching in MongoDB using regular expressions.