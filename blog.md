---
layout: page
title: Blog
order: 2
---

Writing on sustainability, agricultural development, and food systems.

<h2>All posts</h2>
<div class="post-grid">
  {% for post in site.posts %}
      <div class="post-card">
        {% if post.image %}
          <img src="{{ post.image }}" alt="{{ post.title }}">
        {% endif %}
        <p class="post-meta">{{ post.date | date: "%B %Y" | upcase }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </div>
  {% endfor %}
</div>