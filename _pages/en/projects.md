---
layout: page
title: Projects
lang: en
permalink: /en/projects/
---

{% assign projects = (site.categories['project'] | where: "lang", page.lang) %}

<div id="projects">
    <div class="row">
    {% for project in projects %}
            <div class="col-md-2 col-sm-3 col-xs-6 project-item">
                <a href="{{site.baseurl}}{{project.url}} " class="project-link" >
                    <div class="project-hover">
                        <div class="project-hover-content">
                            <i class="fa fa-headphones fa-3x"></i>
                        </div>
                    </div>
                    <img src="{{site.baseurl}}/img/project/{{ project.thumb }}" class="img-responsive img-centered" alt="">
                </a>
                <div class="project-caption">
                    <h4>{{ project.title }}</h4>
                    <p>{{ project.date | | date: "%m-%Y" }}</p>
                    <p>({{ project.tags | join: ' / ' }})</p>
                </div>
            </div>
    {% endfor %}
    </div>
</div>


