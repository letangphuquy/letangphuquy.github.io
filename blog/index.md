---
layout: default
title: Blog
---

[&larr; Home](../)
{: .back}

# **Blog**

{% for post in site.posts %}
{{ post.date | date: "%b %-d, %Y" }}
<br>
[**{{ post.title }}**]({{ post.url | relative_url }})
{% if post.description %}<br>
*{{ post.description }}*{% endif %}
<hr>
{% else %}
<p class="muted">No posts yet.</p>
{% endfor %}
