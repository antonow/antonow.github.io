---
layout: post
title: "3 Sorting Algorithms (Bubble, Quick, and Merge)"
description: ""
category: technical
---

What is an algorithm? It is any set of instructions that a computer (or person) follows in order to achieve a desired solution.

Studying algorithms is important because better algorithms make programs more efficient. Many times the data set that a program needs to interact with is very large. In order for the program to complete in a reasonable amount of time, you can upgrade the speed of the computer or come up with a more efficient algorithm. Upgrading the computer can be prohibitively expensive, but with a new algorithm you can get more mileage out of the same hardware.

I want to look today at three different examples of sorting algorithms. The first algorithm is called “Bubble Sort.” It is a very basic sorting algorithm - one that anybody might come up with as an initial attempt at making a sorting algorithm. It works by going through the list of items to be sorted sequentially and comparing two adjacent values each time. The values then get swapped if they are in the wrong order.

{% highlight ruby %}
________________________________
| 4 | 2 | 7 | 6 | 1 | 5 | 9 | 3 | (swap 4 and 2)

________________________________
| 2 | 4 | 7 | 6 | 1 | 5 | 9 | 3 | (do not swap 4 and 7)

 (swap 7 and 6)
________________________________
| 2 | 4 | 6 | 7 | 1 | 5 | 9 | 3 | (swap 7 and 1)

________________________________
| 2 | 4 | 6 | 1 | 7 | 5 | 9 | 3 | (swap 7 and 5)

________________________________
| 2 | 4 | 6 | 1 | 5 | 7 | 9 | 3 | (do not swap 7 and 9)

 (swap 9 and 3)
________________________________
| 2 | 4 | 6 | 1 | 5 | 7 | 3 | 9 | (result after 1st pass)

{% endhighlight %}

After the list has been iterated through once in this fashion, we iterate through it again and repeat the process until no swaps are made. Now we know that the list is ordered. This algorithm is very simple, but can take a very long time to execute. When it comes to algorithms, simplicity != efficiency.

A faster sorting algorithm is merge sort. Merge sort uses a divide and conquer strategy. All the numbers are separated and evaluated in pairs, like this:

{% highlight ruby %}

4  2  7  6  1  5  9  3

2  4
      6  7		  (divide into pairs)
            1  5
		  3  9

2  4  6  7		  (merge sorted couples and compare 1st values)
	    1  3  5  9	  

1  2			  (get 1 and 2)

      4  6  7 		  (compare 1st values)
	       3  5  9

1  2  3  4		  (get 3 and 4)

	    6  7          (compare 1st values, get 5 and 6)
	          5  9	  (compare 1st values, get 7 and 9)

1  2  3  4  5  6  7  9
{% endhighlight %}

Another algorithm that has a comparable efficiency to merge sort is quick sort. In quick sort, you pick any number as the “pivot" number and compare it to each other number in the list. The numbers get moved to the right or left depending on whether they are higher or lower than the pivot. At the end of one of these iterations, the pivot number is guaranteed to be in its correct final position.