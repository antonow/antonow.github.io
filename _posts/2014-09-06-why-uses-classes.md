---
layout: post
title: "Why Uses Classes"
description: ""
category: technical
---

Object oriented programming (OOP) is a popular programming paradigm. What characterizes OOP is the focus on organizing code into objects that are supposed to represent real world objects. For example, we could have a class called Player and create player “objects” that would be instances of the Player's class.

{% highlight ruby %}
class Player
	@@count = 0

	def initialize(species, stamina)
		@@count += 1
		@species = species
		@stamina = stamina
	end
	def eat(food_item)
		stamina += food_item.nutrition
		puts “Mmmm, yummy.”
	end
end

joJo = Player.new(“human”, 70)
qiQi = Player.new(“alien”, 90)
{% endhighlight %}

What this type of organization allows us to do is to easily add new players with unique attributes and also make universal changes to the properties of all individual players at once. 

Classes represent the general category that includes all the different objects that belong to that category. In OOP, all objects are instances of some class and inherit the features of that class. In our example, any new player is going to inherit species and stamina attributes from the Player class.

Another major benefit of using classes is encapsulation. Encapsulation means that variables and methods defined within an object or a class are self-contained and do not interfere with any variables and methods that have been defined elsewhere in the program. Classes make sharing and borrowing code much easier. Sites like [phpclasses.org][phpclasses] require uploading code as classes so that the borrowed code doesn’t affect the rest of the code in a project when you try to incorporate it.

Finally, when people write about the benefits of OOP, they usually mention polymorphism. I understand polymorphism as a quality of code that makes it usable across different types of objects. I’ll try to illustrate with an example.

In my earlier example, I could call the eat method on any instance of the Player class. Now, I want to also have animals in my game which will, like players, also have the ability to eat, but they won’t be able to articulate their pleasure derived from eating by saying “Mmmm, yummy.” The solution? I can make another class called Animal and write an eat method that will increase stamina without the remarks. The ability to call the eat method on instances of both the Animal and Player class and have each produce a different but appropriate effect is what is called polymorphism.

So whether you intend to share your code or you just want to have nicely organized and compartmentalized code, use classes.

[phpclasses]:	http://www.phpclasses.org