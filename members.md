---
layout: page
title: Members
description: The amazing people that make up the team.
class: members
permalink: /members/
---

## Officers

<ul class="members-list">
    {% for page in site.pages %}
        {% if page.member-rank <= 1 %}
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ page.title }}-sim.html">

                <h2>{{ page.title }}</h2>
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
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ page.title }}-sim.html">

                <h2>{{ page.title }}</h2>
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
            <li style="background-image:url('http://us.battle.net/static-render/us/{{ page.member-armory }}-profilemain.jpg')"><a class="post-link" href="/{{ page.title }}-sim.html">

                <h2>{{ page.title }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>
