---
layout: page
title: Members
description: The amazing people that make up the team.
permalink: /members/
---

## Officers

<ul class="members-list">
    {% for page in site.pages %}
        {% if page.member-rank <= 1 %}
            {% assign name = page.path | split: '/' | last | split: '.' | first %}
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ name }}-sim.html">

                <h2>{{ name }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>

## Raiders

<ul class="members-list">
    {% for page in site.pages %}
        {% if page.member-rank > 1 and page.member-rank <= 4 %}
            {% assign name = page.path | split: '/' | last | split: '.' | first %}
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ name }}-sim.html">

                <h2>{{ name }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>

## Casuals

<ul class="members-list">
    {% for page in site.pages %}
        {% if page.member-rank > 4 %}
            {% assign name = page.path | split: '/' | last | split: '.' | first %}
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ name }}-sim.html">

                <h2>{{ name }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>
