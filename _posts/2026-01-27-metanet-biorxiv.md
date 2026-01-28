---
layout: paper
title: "METANet: Reconstructing Tissue-specific TF Network Maps"
date: 2026-01-27 11:37:00
description: Ensemble learning for inferring GRNs for 36 human tissues
tags: GRN ML
categories: research visualization
paper_url: "https://doi.org/10.1101/2025.10.10.681634"
pdf_url: "https://www.biorxiv.org/content/10.1101/2025.10.10.681634v2.full.pdf"
code_url: "https://doi.org/10.5281/zenodo.17309372"
---

## Unraveling Tissue-Specific Gene Regulation with METANet

Transcription factors (TFs) act as the "switches" of the genome, controlling which genes are turned on or off in specific biological contexts. Mapping these regulatory networks is essential for understanding the genetic mechanisms underlying complex human traits and diseases. However, accurately reconstructing these networks remains a significant computational challenge.

Current methods generally fall into two categories, each with limitations. Motif-based approaches scan the genome for specific DNA sequences where TFs could bind, but they often lack evidence that the binding actually changes gene expression. Conversely, expression-based methods look for correlations between TF and gene activity, but they struggle to distinguish direct physical regulation from indirect effects or co-regulation.

## Introducing METANet

To bridge this gap, my colleagues and I developed METANet, a supervised ensemble learning framework designed to reconstruct direct and functional tissue-specific TF networks. METANet integrates diverse genomic data types to predict the probability that a TF binds to a target gene.

The framework combines five distinct sets of regulatory features to model gene regulation:
* **Motif-based features**: Leveraging tissue-specific cis-regulatory element activity to determine binding potential.
* **Expression-based features**: Utilizing both linear (LASSO) and non-linear (BART) regression models to capture complex regulatory relationships between TFs and target genes.

By training on high-confidence ChIP-seq binding data, METANet learns to prioritize targets that are supported by both physical binding evidence and functional expression patterns.

## Key Findings
We applied this framework to generate comprehensive network maps for 36 human
tissues, covering approximately 237 TFs and over 12,150 genes. Our evaluations
demonstrate that METANet significantly outperforms established benchmarks (such
as PANDA and Marbach networks) in identifying direct, functional targets
validated by biological data. Furthermore, we showed that these networks can
successfully prioritize disease-associated genes, such as identifying *SREBF2* as
a key regulator in cardiovascular risk traits.

## Read the Full Paper
This research is currently available as a preprint on bioRxiv and is under
review for publication. You can read the full manuscript here: [METANet: A supervised ensemble learning framework for reconstructing direct and functional tissue-specific transcription factor networks](https://doi.org/10.1101/2025.10.10.681634).


## Exploring the Networks

To make these complex regulatory maps accessible, I have created a simple
interactive dashboard using Tableau using our networks that are available on
[Zenodo](https://doi.org/10.5281/zenodo.17309371). The visualization below allows you to
explore the TF-target enrichments and visualize the regulatory architecture
across the different human tissues we analyzed.

---

<div id='vizContainer' style='width:100%; height:850px; overflow:hidden;'>
<div class='tableauPlaceholder' id='viz1769585260706' style='position:
relative'><noscript><a href='#'><img alt='Top 20 edges in METANet by tissue '
src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ME&#47;METANettop20edgesbytissue&#47;Top20edgesinMETANetbytissue&#47;1_rss.png'
style='border: none' /></a></noscript><object class='tableauViz'
style='display:none;'><param name='host_url'
value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version'
value='3' /> <param name='site_root' value='' /><param name='name'
value='METANettop20edgesbytissue&#47;Top20edgesinMETANetbytissue' /><param
name='tabs' value='no' /><param name='toolbar' value='no' /><param
name='static_image'
value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ME&#47;METANettop20edgesbytissue&#47;Top20edgesinMETANetbytissue&#47;1.png'
/> <param name='animate_transition' value='yes' /><param
name='display_static_image' value='yes' /><param name='display_spinner'
value='yes' /><param name='display_overlay' value='yes' /><param
name='display_count' value='yes' /><param name='language' value='en-US' /><param
name='filter' value='publish=yes' /></object></div>                <script
type='text/javascript'>                    var divElement =
document.getElementById('viz1769585260706');                    var vizElement =
divElement.getElementsByTagName('object')[0];                    if (
divElement.offsetWidth > 800 ) {
vizElement.style.minWidth='1020px';vizElement.style.maxWidth='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight=(divElement.offsetWidth*0.75)+'px';}
else if ( divElement.offsetWidth > 500 ) {
vizElement.style.minWidth='1020px';vizElement.style.maxWidth='100%';vizElement.style.minHeight='587px';vizElement.style.maxHeight=(divElement.offsetWidth*0.75)+'px';}
else { vizElement.style.width='100%';vizElement.style.height='727px';}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
</div>
---

