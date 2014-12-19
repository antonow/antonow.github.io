---
layout: post
title:  "When to Use Hashes in Ruby"
date:   2014-08-30 14:57:41
categories: technical Ruby hash
---

Hashes are like arrays in that they are lists of elements, but with a bit more complexity. Each item in a hash has two parts - the key (or index) and the value. This is an example of an array and a hash:

{% highlight ruby %}
my_cool_array = ["Chuck", 53, "tarantula"]
my_cool_hash = { "name" => "Chuck", "age" => 53, "pet" => "tarantula" }
{% endhighlight %}

The additional complexity allows for a lot of cool things you can do with hashes that you wouldn’t be able to do with arrays.

If I wanted to find "tarantula" in the array, I’d need to remember that I once put it at index 2 and make sure that I don’t accidentally rearrange the elements of my array. With a hash, I can access "tarantula" easily, without regard to what order the hash elements are in, if I write my_cool_hash["pet"].

**Keeping count**

Let’s say you want to keep a count of the number of times a word appears in a block of text. You can use a hash to store a word as a key the first time it appears and then increment it’s value by 1 when the word appears again.

{% highlight ruby %}
# This is how you would add the first instance of a word to the hash:

frequency_hash["spelunking"] = 1

# When it appears again, this is how you increase it’s value:

frequency_hash["spelunking"] += 1

# Then, once all the words have been counted, your hash might look something like this:

frequency_hash = { "spelunking" => 2, "is" => 4, "the" => 5 … }
{% endhighlight %}

And viola! You have a list of all the words in the text along with a count of how many times they appear.

**Making dictionaries and libraries**

Instead of assigning numbers as values, you can also assign strings or even other hashes. In this way you can build pretty complex data structures that are organized and easy to access.

Here’s an example of how you could use a hash to store information about your library:

{% highlight ruby %}
my_library = {
	"Pride and Prejudice" => { "author" => "Jane Austen", "year" => 1813 }
	"War and Peace" => { "author" => "Leo Tolstoy", "year" => 1869 }
	"Gorgias" => { "author" => "Plato", "year" => -380 }
}
{% endhighlight %}

**Pass in optional parameters to a method**

Sometimes you want a method to be able to accept optional parameters. One way to do this is to put an asterisk in front of the parameter that should be optional, like so:

{% highlight ruby %}
def do_something_cool(mandatory, *optional)
	do ____ if optional == true
end
But you can also do it with a hash, like so:

def do_something_cool(mandatory, :option1 => true, :option2 => false})
	do ____ if options[:option1]
	do ____ if options[:option2]
end
{% endhighlight %}

I’m sure there are other great applications of hashes, but this is all I have for you today.