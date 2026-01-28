---
layout: paper
title: "First Publication!"
date: 2022-06-10 08:34:00
description:
tags: ML
categories: research
paper_url: "https://doi.org/10.1093/g3journal/jkac144"
pdf_url: "https://academic.oup.com/g3journal/article-pdf/12/8/jkac144/45183853/jkac144.pdf"
code_url: "https://github.com/BrentLab/TFPertRespExplainer"
---

It has been a long time since my last blog post, but the news is that I
published my first paper! It's been a year and a half since I joined the Brent
Lab and I have seen my rotation project project *Predicting which genes will
respond to transcription factor perturbations* come to fruition.

Briefly, the paper aims to predict which genes will respond to the perturbation
of a particular transcription factor (TF) in yeast and human cells. We use
XGBoost gradient-boosted trees integrating pre-perturbation gene expression
level and variation, histone modifications, chromatin accessibility, and
ChIP-seq TF-binding location data to predict whether a gene is "responsive" to a
TF perturbation. In human cells, a gene is considered responsive based on
whether its DESeq2 result are significant at P<0.05 and its absolute log2
fold-change is greater than 0.5. One of the core analyses of the paper is the
quantification of feature influences. That is, determining which of the input
features is the most predictive. The paper finds that in humans,
pre-perturbation gene expression level and variation were the most influential
whereas TF binding location was least informative. This comes at a surprise as
ChIP-seq data is often regarded as one of the most useful sources of evidence
for potential TF regulation of a gene.

The lack of TF binding location predictive power in human cells is interesting,
particularly because it is one of the most useful features in the yeast model.
One way we could attribute this result is the size and complexity of the human
genome. This may be evidence that in humans, TF regulation may be more mediated
by enhancers that are further from the gene body.

Check out the paper published on G3 at the following link:
https://doi.org/10.1093/g3journal/jkac144.
