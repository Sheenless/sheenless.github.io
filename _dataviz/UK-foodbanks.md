---
layout: dataviz-item
title: "Food banks shouldn’t be accepted as part of modern UK life"
subtitle: "Only 15 years ago, they were rarely used."
date: 2024-11-19
image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*CfeCv_eIFoT8jKQBncilGQ.png"
tags: [food, poverty]
tools: [Python]
blurb: "The shocking numbers behind the explosion in use of food banks in the UK."
---

During her 2024 Eras UK tour, Taylor Swift donated to food banks in each city she played at. Charity bosses described the donations as [‘breathing space’](https://www.theguardian.com/music/article/2024/jun/25/taylor-swift-donation-enables-cardiff-food-bank-lorry-supplies) in their efforts to keep up with demand. The news swept through social media, leading many to sing praise for Swift for her charity, while others argued that food banks do not fix the causes that drive people to food banks. Both sides make a fair point, but they share the same assumption: that food banks are a given in contemporary life.

Because 15 years ago, food bank usage was relatively rare across the UK. Now, 1 in 33 people in the UK use them, and this number is growing.[1] This post explores the sudden prevalence of UK food banks.

Headlines of widespread UK food bank use have become unsurprising, given numerous reports of rife inequality and climbing food prices. So I was saddened to see current food bank uses numbers, but not surprised, because I — like many of Swift’s fans — took the need for food banks as a tragic, but expected, part of modern life.

Actually, the history of UK food bank numbers show otherwise:

![Graph one](https://miro.medium.com/v2/resize:fit:828/format:webp/1*CfeCv_eIFoT8jKQBncilGQ.png)

The figure above draws on data from the Trussell Trust, the UK’s largest food bank charity. As shown, food bank deliveries increased from around 26,000 per year in 2008, to nearly 3 million in 2022 — that’s 11439% increase in 15 years.

That number isn’t limited by demand, but by supply: Trussell Trust recipients are allowed only three vouchers per six months. That means these numbers are an underestimate of need.

It is this radical transformation in need that shocked me. It changes UK food banks from being fairly rare, to commonplace and a societal norm.

But while these numbers show a sudden change, clearly [UK food banks themselves are not a new idea](https://rgs-ibg.onlinelibrary.wiley.com/doi/full/10.1111/tran.12535). They appear around the 18th Century, providing food, not finances, for the poor. Food, because of a concern that donated money might be spent on drinking, etc.[^1] The food bank model was organised by church and community groups, and continued as independent volunteer groups until the UK rise in homelessness in the 80s and 90s. Around this time, food banks started working more closely with food industry; using supermarket vouchers, collecting wastage and importing the ‘American food bank model’ of shoppers donating at supermarket collection points.

It’s not until around the financial crisis in 2008 however that food bank reporting shoots up. Here’s the Google Ngram frequencies of ‘food bank’ found in printed sources published since 1970.[^2] We can see the topic had relatively little coverage until about 2008.

![Ngram 1](https://miro.medium.com/v2/resize:fit:828/format:webp/1*rs0ePypHv3KRhQzDaKtxWQ.png)

Ok, the above shows a trend, but most of us aren’t that familiar with the actual scale of these Ngram values. These same values could be tiny in comparison to other topics. We need a yardstick. For that, let’s plot the same graph again, but overlay the results for Taylor Swift.

![Ngram 2](https://miro.medium.com/v2/resize:fit:828/format:webp/1*MMC5yQq_o3yPQi8fGzsdrA.png)

Admittedly, this correlates much more than I expected. I suspected some link, because of reports of Taylor Swift supporting food banks, but clearly one of the world’s biggest pop stars will appear in other publications. Still, this shows scale of how food banks have grown as a UK topic in the last 15 years and this isn’t surprising when you look at the growing number of food banks.

Today, there are at least 1,172 food banks in the UK. Most are small groups of volunteers, churches and charities, but there are exceptions. The Trussell Trust distributes from around 1,700 locations. Then there are networks like the [Independent Food Network](https://www.foodaidnetwork.org.uk/our-members), who support around 550 independent food banks, or Food Bank Aid who support 20K people a week through 32 food banks.

It is worth noting that our first graph is from one just food bank charity of many, albeit the biggest and a major source for government reporting. On one hand, this means that these figures are an underestimate of the overall figure as they omit numbers from other food banks, but on the other hand, we could be visualising the growth of a charity, and not a general shift in food bank usage. For instance, perhaps the scale of food bank demand hasn’t increased, but instead these numbers show the rising capacity of the Trussell Trust to provide food deliveries. How do we know if these demand rises are being felt by food bank groups more widely?

Ideally we would compare food bank deliveries across different groups but since food banks are run by small volunteer groups, there is no aggregated UK dataset. Sadly also, I couldn’t find similar data from other food banks, but the graph below comes what another of the largest UK food bank groups, the Independent Food Aid Network (IFAN), found in their [recent 2023 survey](https://www.foodaidnetwork.org.uk/data).

![Increasing need, decreasing donations](https://miro.medium.com/v2/resize:fit:828/format:webp/1*SyLr1hq0uXy6sK1wsfnh6A.png)

The majority of IFAN foodbanks report a 25%-50% increase in demand in the last year, matching similar increases to those reported by the Trussell Trust. So we’re seeing similar reports that many UK food banks are seeing a consistent rise in demand. This scale of growth in can also be seen in the [655,000 people who used a Trussell Trust food bank for the first time in 2023/24](https://commonslibrary.parliament.uk/research-briefings/cbp-9209/#:~:text=More%20than%20655%2C000%2C000%20people%20used,time%20users%20in%202022%2F23), only slightly less than the 760,000 first time users in 2022/23. These figures demonstrate the increasing number of people struggling to feed themselves.

But so far we’ve treated this rise of users as a homogenous group when the reality is that food banks seem unlikely to be uniformly used across the population. Sadly, I can’t find any public data to find the composition of users, but the Trussell Trust does distinguish one user group; children.

![Number of deliveries to children](https://miro.medium.com/v2/resize:fit:828/format:webp/1*kF8aZ8S9GtuRT0oa0mAQuQ.png)

The prospect of helping mothers feed children has historically been part of food bank fundraising, but the number of children receiving food packages has doubled in the last five years. One third of foodbank recipient users today from Trussell Trust are children. Again, this is likely to be an underestimate of the number of children using food bank resources, as some adults might be collecting food packages to share with their family.

These numbers are concerning, and particularly so given the potential life-long impacts of children suffering with malnutrition during development; such as risks to physical and cognitive capacity.

So how can a country like the UK, which has some of the [global lowest percent of personal income spent on food](https://www.gov.uk/government/statistics/family-food-fye-2022/family-food-fye-2022#:~:text=In%20FYE%202022%2C%20an%20average,14.4%25%20and%2018.3%25%20respectively.), seem to suddenly have so many people struggling to afford food? Some answers can be found in the graph below, and will unsurprising to anyone following the UK news.

![Rising costs](https://miro.medium.com/v2/resize:fit:828/format:webp/1*fzXzteqrYL1yuw9go9ds9g.png)

The costs of living and changes to social security support have caused food banks to become the [primary responders to poverty](https://www.bigissue.com/opinion/food-poverty-crisis-waste-uk-ifan-sabine-goodwin/). But food banks are also threatened by these cost of living increases, as they reduce the amount communities can donate. 65% of food bank organisations surveyed by IFAD say that [donations are decreasing while demand is rising](https://www.foodaidnetwork.org.uk/data), posing a worrying future for food bank users.

So we know scale of the challenge and some of the drivers. We also have [ideas of the solutions](https://www.trussell.org.uk/news/heres-what-needs-change-to-end-the-need-for-food-banks), and supporting mechanisms to support communities, such as [free school meals for children](https://theconversation.com/if-the-government-is-serious-about-tackling-child-poverty-it-should-extend-free-school-meals-235070). If we are to change this trend of food bank use, government action must enable equitable access to nutritious meals, and provide support programmes to help families meet their basic needs.

That challenge seems great, but we must also remember that UK food banks were a relatively rare occurrence only fifteen years ago. They have become commonplace today but we must not accept them as a given in modern life. It is plausible to achieve a future where UK food banks become redundant again.

---

[^1]: Households below average income (HBAI) statistics: 3% of all individuals in the UK used a food bank between 2022/2023 https://commonslibrary.parliament.uk/research-briefings/cbp-8585/

[^2]: This is an interesting ethical component. Money will provide agency, undoubtedly more useful than food, but donators might not approve what recipients purchase with that choice.
