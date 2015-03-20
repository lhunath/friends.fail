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
        {% if page.member-rank <= 2 %}
            <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/{{ page.member-armory }}-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/1-1.jpg')"><a class="post-link" href="/{{ page.title }}-sim.html">

                <h2>{{ page.title }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>

## Mains

<ul class="members-list">
    {% for page in site.pages %}
        {% if page.member-rank > 2 and page.member-rank <= 5 %}
            <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/{{ page.member-armory }}-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/1-1.jpg')"><a class="post-link" href="/{{ page.title }}-sim.html">

                <h2>{{ page.title }}</h2>
                <h3>{{ page.subtitle }}</h3>
                <div>{{ page.content }}</div>

            </a></li>
        {% endif %}
    {% endfor %}
</ul>
