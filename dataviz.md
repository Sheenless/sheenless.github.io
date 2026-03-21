---
layout: page
title: Data Vis
order: 4
---

Visualisations exploring humanitarian and sustainability challenges.

<div class="post-grid">
{% for item in site.dataviz %}
  <div class="post-card">
    {% if item.image %}
      <img src="{{ item.image }}" alt="{{ item.title }}">
    {% endif %}
    <h3><a href="{{ item.url }}">{{ item.title }}</a></h3>
    <p>{{ item.blurb }}</p>
    {% if item.journal %}
      <p class="meta">{{ item.journal }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>