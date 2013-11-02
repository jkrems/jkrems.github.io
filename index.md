---
layout: page
title: ''
---
{% include JB/setup %}

{% for post in site.posts %}
  <h2>
    <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date_to_string }}</small>
  </h2>
  <p>
    {{ post.excerpt }}
  </p>
{% endfor %}
