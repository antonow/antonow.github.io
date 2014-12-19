---
layout: post
title:  "Margins, Borders, and Padding"
date:   2014-08-17 14:57:41
categories: technical CSS
---

Margins, borders, and paddings are properties of every CSS element. It's easy to remember their functions if you keep in mind the box model.

![CSS Box Model]({{ site.url }}/assets/box-model.gif)

As you can see in the image, the content is at the innermost center of the element. If we do not add some padding, the content will fill the entire space of the element. If our content is an image, this might be desirable. With text however, it usually looks nicer to add a little padding to keep the text from being right up against the sides of the element. Padding is transparent, which means it cannot be assigned a color.

This is how we would add padding to an element with CSS:

{% highlight css %}
div {
     padding: 10px;
}
{% endhighlight %}

This will add 10 pixels of space between the content and each side of the element. If you need to assign different amounts of space for different sides, put four numbers instead of just one. The first number will designate the amount of padding from the top side; the second number is for the right side; the third is for the bottom; and the fourth is for the left.

{% highlight css %}
div {
     padding: 10px 20px 15px 20px;
}
{% endhighlight %}

Borders go around the outside of the element. Unlike padding and margins, borders are visible when viewing the webpage. This is how we would add a border to an element with CSS:

{% highlight css %}
div {
     border: 1px solid #000000;
}
{% endhighlight %}

The first property specifies the width of the border (here 1 pixel). The second property specifies the level of transparency. The third property specifies the color of the border. If no color is specified, the border will inherit the color from the color property of the element.

Margins compose the outermost layer in the box model. They go outside even the borders. Let's say we want an element to keep a little space between itself and the surrounding elements. Adding margins would be the best solution to this. Margins are transparent and act like padding that is on the outside of the element. Here's how we would add margins to an element with CSS:

{% highlight css %}
div {
     margin: 10px 20px 15px 20px;
}
{% endhighlight %}

As with our first example using padding, we could put only one number if we want even margins all around the object. We can also use two or three numbers depending on what we are trying to accomplish.

These are the basics of margins, borders, and padding. We can get more fancy using different border styles like dotted, dashed, double, or groove. Or we can specify particular margins or padding using margin-top or padding-right. But this is beyond the scope of this post. I hope this introduction was helpful! (image from www.w3schools.com)