---
layout: post
title: "Inheritance vs. Composition"
description: ""
category: technical
---

Inheritance and Composition are both ways of borrowing code from a different class to avoid having to rewrite methods that have already been written elsewhere.

Classes have the quality of encapsulation - that is, that methods belonging to a class cannot be called except from an instance of that class. However, sometimes we realize that we’ve already written a method that we would like to use, but that it is inaccessible because it’s in a different class.

One possible solution is inheritance. With inheritance there is a strict hierarchy. The child class inherits the methods of the parent class.

{% highlight ruby %}
class Reptile
	def eat
		puts “Nom nom"
	end
end

class Iguana < Reptile
end
{% endhighlight %}

In this example, the Iguana class inherits the methods of the Reptile class, which means that we can call the eat method on an instance of the Iguana class.

{% highlight ruby %}
robby = Iguana.new
robby.eat
# => “Nom nom”
{% endhighlight %}

One problem with inheritance is that changing any method in the parent class will have important repercussions on all classes that inherit from it. An alternative to inheritance is composition.

With composition, you still have two different classes but the relationship between them doesn’t have to be so top-down. Whereas inheritance can be summarized by an is-a relationship (Iguana is a Reptile), composition is comparable to a has-a relationship. Here’s what composition would look like with our Reptile and Iguana classes.

{% highlight ruby %}
class Reptile
	def eat
		puts “Nom nom"
	end
end

class Iguana
	attr_accessor :instance

	def initialize
		@instance = Reptile.new
	end
end

robby = Iguana.new
robby.instance.eat
# => "Nom nom"
{% endhighlight %}

In this example, composition has required the addition of several lines of code inside the Iguana class, but composition has its benefits. It’s less likely to cause undefined method errors when the parent class is changed. This is because the child class simply initializes an instance of the parent class with whatever methods the parent class currently contains. Composition also allows for the relationship to be reversed; if necessary, we could have the Reptile class use methods contained in the Iguana class by initializing an instance of Iguana inside the Reptile class.

It seems that, in general, programmers advocate using composition over inheritance because of the increased flexibility, but, as always, it is a case-specific choice and sometimes inheritance may simply make more sense than composition. Following any rule indiscriminately is never a good idea.