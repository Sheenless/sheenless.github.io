---
layout: page
title: Research
order: 3
---

<style>
  .research-list {
    margin-top: 1.5rem;
  }

  .research-row {
    display: grid;
    grid-template-columns: 6rem 1fr auto;
    grid-template-areas:
      "meta  title  badge"
      "meta  footer badge";
    column-gap: 1.25rem;
    row-gap: 0.2rem;
    padding: 1rem 0;
    border-top: 1px solid #e0ddd5;
    align-items: start;
    text-decoration: none;
    color: inherit;
  }

  .research-row:last-child {
    border-bottom: 1px solid #e0ddd5;
  }

  .research-row:hover .research-row__title {
    color: #1a5c3a;
  }

  .research-row__meta {
    grid-area: meta;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-top: 0.1rem;
  }

  .research-row__date {
    font-size: 0.78rem;
    color: #6b6b63;
    white-space: nowrap;
  }

  .research-row__journal {
    font-size: 0.75rem;
    color: #6b6b63;
    font-style: italic;
    line-height: 1.3;
  }

  .research-row__title {
    grid-area: title;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.15s ease;
  }

  .research-row__footer {
    grid-area: footer;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
  }

  .research-row__blurb {
    font-size: 0.82rem;
    color: #6b6b63;
    line-height: 1.4;
  }

  .research-row__countries {
    font-size: 0.78rem;
    color: #6b6b63;
  }

  .research-row__badge {
    grid-area: badge;
    display: inline-block;
    background: #1a5c3a;
    color: #ffffff;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border-radius: 2px;
    white-space: nowrap;
    align-self: start;
  }

  @media (max-width: 560px) {
    .research-row {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "title  badge"
        "footer footer"
        "meta   meta";
    }
  }
</style>

<p>Articles, policy briefs and other outputs from my research.</p>

<div class="research-list">
{% assign sorted_research = site.research | sort: "date" | reverse %}
{% for item in sorted_research %}
  <a class="research-row" href="{{ item.url }}">

    <div class="research-row__meta">
      <span class="research-row__date">{{ item.date | date: "%b %Y" }}</span>
      {% if item.journal %}
        <span class="research-row__journal">{{ item.journal }}</span>
      {% endif %}
    </div>

    <span class="research-row__title">{{ item.title }}</span>

    <div class="research-row__footer">
      {% if item.blurb %}
        <span class="research-row__blurb">{{ item.blurb }}</span>
      {% endif %}
      {% if item.countries %}
        <span class="research-row__countries">
          {{ item.countries | join: " · " }}
        </span>
      {% endif %}
    </div>

    {% if item.type %}
      <span class="research-row__badge">{{ item.type }}</span>
    {% endif %}

  </a>
{% endfor %}
</div>