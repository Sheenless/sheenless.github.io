---
layout: page
title: Blog
order: 2
pagination:
  enabled: true
---

Writing on sustainability, agricultural development, and food systems.

<h2>All posts</h2>
<div class="post-grid">
  {% for post in paginator.posts %}
      <div class="post-card">
        {% if post.image and post.image != "" %}
          <img src="{{ post.image | replace: '/upload/', '/upload/f_auto,q_auto,w_700/' }}" alt="{{ post.title }}" loading="lazy">
        {% endif %}
        <p class="post-meta">{{ post.date | date: "%B %Y" | upcase }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </div>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<nav class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-link">&larr; Newer posts</a>
  {% endif %}
  <span class="pagination-status">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-link">Older posts &rarr;</a>
  {% endif %}
</nav>
{% endif %}