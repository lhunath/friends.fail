---
layout: page
title: Members
class: members
permalink: /members/
---

<ul class="members-list">
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/92/159079004-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/1-1.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Denola</h2>
        <h3>Denola is pretty awesome.</h3>
        <div>As a veteran WoW player, Denola has seen the many faces of conflict in Azeroth and beyond.  He's vetured between realms and joins us on Argent Dawn from the far beyond realms of the Old World.</div>

    </a></li>
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/99/159078755-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/1-1.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Primrose</h2>
        <h3>Primrose is hilarious.</h3>
        <div>Undoubtedly the most paradoxally loveliest and scariest of paladins, Primrose is a marvel of ancient WoW lore.  Lend her your ear and she will tell you tales of the mysterious deeps of Old Ironforge, Druid swim-form trainers long forgotten and what our world was like before the Cataclysm's fires and Illidin's demons took hold.</div>

    </a></li>
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/168/159098792-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/4-1.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Lelliandra</h2>
        <h3>Lelliandra is pleasantly drunk.</h3>
        <div>You've never before come across a character as wildly perplexing and strangely intreguing as Lelliandra.  He'll burst out with hillarious common non-sense and top your DPS charts while ordering some pizza and taking down a few raid bosses on the side.</div>

    </a></li>
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/87/159541847-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/1-0.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Pallydes</h2>
        <h3>Pallydes unnaturally firm.</h3>

    </a></li>
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/238/64591086-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/4-1.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Amethix</h2>
        <h3>Amethix is gorgeously opinionated.</h3>

    </a></li>
    <li style="background-image:url('http://us.battle.net/static-render/us/argent-dawn/55/159522871-profilemain.jpg?alt=/wow/static/images/2d/profilemain/race/11-1.jpg')"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <h2>Youremybunny</h2>
        <h3>Youremybunny is cuddely.</h3>

    </a></li>
    {% for member in site.members %}
    <li>
        <img src="{{ post.img }}">

        <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>

        {{ post.contents }}
    </li>
    {% endfor %}
</ul>
