---
layout: page
title: Visual
order: 5
---

I provide specialist design, including photos, video, graphic design, typesetting and website development. This page contains examples of my work for research. I also offer <a href="https://www.instagram.com/sheenless.analogue/">analogue portraiture</a> outside of research. 

<h2>All work</h2>
<div class="post-grid">
  {% assign visual_sorted = site.visual | sort: 'date' | reverse %}
  {% for item in visual_sorted %}
      <div class="post-card">
        {% if item.image and item.image != "" %}
          <img src="{{ item.image | replace: '/upload/', '/upload/f_auto,q_auto,w_700/' }}" alt="{{ item.title }}" loading="lazy">
        {% endif %}
        <p class="post-meta">{{ item.date | date: "%B %Y" | upcase }}</p>
        <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
        <p>{{ item.excerpt | strip_html | truncate: 140 }}</p>
      </div>
  {% endfor %}
</div>