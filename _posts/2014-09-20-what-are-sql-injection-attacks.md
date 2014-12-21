---
layout: post
title: "What are SQL Injection Attacks?"
description: ""
category: technical
---

Websites often allow users to access particular information from the database. An application could take a users input and use it to make a database query, like in this example:

{% highlight ruby %}
def print_reps_from_state(state)
  puts "#{state} REPRESENTATIVES"
  output = $db.execute("SELECT name FROM congress_members WHERE location = '#{state}'")
  output.each { |rep| puts rep }
end
{% endhighlight %}

$db.execute(…) takes the user’s input (state) and uses it to make a query to the database. If the user is knowledgeable in SQL, they could pass in an input containing an SQL command to give them more access to the database then was intended by the person putting together the website. They may be able to view all the records in a table, add new records, and alter or delete records.

This all happens because the user’s input is passed directly into the SQL query ("SELECT name FROM congress_members WHERE location = '#{state}’") where it says #{state}. The only way to prevent an SQL injection attack is to never directly pass in a user’s input into the query.

The user’s input must be sanitized to make sure that it does not contain any code that might expose the database to an attack. Rather than try to test the input for all the known SQL injection attack techniques, it’s easier to verify that the input doesn’t have any more characters or symbols than it needs.

For example, if we are asking the user for an email, we would make sure that it does not contain any spaces or other characters that aren’t allowed in an email address. Better yet, we could ping the email address to verify it exists. Only after we have verified that the input provided by the user is safe should we use it to do a query to the database.

So what’s one sure way to prevent SQL injection attacks? Never directly pass in a user’s input to an SQL query. Always make sure that if you are going to use a user’s input in a query that the input does not contain any potentially dangerous code.