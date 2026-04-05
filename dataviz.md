---
layout: page
title: Data Vis
order: 4
---

I make data visualisations as a hobby, usually exploring humanitarian and sustainability challenges.
Some of these graphics are taken from quick LinkedIn posts I've made to share more information on a topic.
Others are longer articles - but I rarely have the time for this.

Nearly all of these are made in Python, but I'll likely use Datawrapper more so in the future for interactive graphics just for how easy it is to embedd these in websites like mine (although Plotly is also excellent).

**I'm open to data vis projects.** Let me know if there are particular topics that you have data in and would like to explore ways to visualise the message.

---

<div class="post-grid">
{% assign dataviz_sorted = site.dataviz | sort: 'date' | reverse %}
{% for item in dataviz_sorted %}
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