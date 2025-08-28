1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id") শুধু একটা element ধরে যেটার id ইউনিক থাকে

getElementsByClassName("class") একই class এ থাকা অনেকগুলো element ধরে

querySelector("selector") CSS selector দিয়ে খোঁজে এবং শুধু প্রথম element ধরে যেটার সাথে ম্যাচ হয়

querySelectorAll("selector") CSS selector দিয়ে খোঁজে এবং  সবগুলো element ধরে যেগুলো ম্যাচ হয়


2. How do you create and insert a new element into the DOM?

document.createElement("tagName") ব্যবহার করতে হয় একটা নতুন এলিমেন্ট তৈরি করতে। তারপর innerText, innerHTML, id, className ব্যবহার করে  অ্যাট্রিবিউট সেট করা হয়। DOM-এ উপাদানটি ঢুকানোর  জন্য appendChild() অথবা append() ব্যবহার করা হয়।


3. What is Event Bubbling and how does it work?

ইভেন্ট Bubbling হল DOM-এ এক ধরণের ইভেন্ট প্রোপাগেশন যেখানে একটি চাইল্ড এলিমেন্টে ঘটে যাওয়া একটি ইভেন্ট ধাপে ধাপে তার প্যারেন্ট এলিমেন্টগুলিতে উপরের দিকে যাওয়া ।

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation এমন একটি প্রক্রিয়া যেখানে একাধিক চাইল্ড এলিমেন্টের সাথে আলাদা listener সংযোগ স্থাপনের পরিবর্তে, একটি  listener সাথে একটি parent element এর  সংযোগ স্থাপন করা হয় যাতে এর মধ্যে  event handle করা যায়। এটি কার্যকর কারণ এটি কম মেমোরি ব্যবহার করে।

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() কোনো element-এর ডিফল্ট কাজ থামিয়ে দেয়
stopPropagation() কোনো event যাতে parent element-এ না যায় সেটা থামিয়ে দেয়
