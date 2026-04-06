# Building an AI Portfolio: Connecting Deep Learning, Classical ML, and Applied Data Science

## Summary

As part of a master's-level AI module, I produced a portfolio of work that spanned convolutional neural networks for image classification, supervised and unsupervised learning for customer behaviour prediction, and demographic data analysis for policy decision-making. This case study reflects on what it meant to work across these areas simultaneously and what the experience revealed about how different branches of AI and data science connect.

## Context and Motivation

Academic modules tend to teach methods in isolation. You learn regression in one week, neural networks in another, clustering in a third. But real problems do not arrive neatly labelled with the correct technique. The value of building a portfolio across multiple domains was that it forced me to think about method selection as a decision, not a given. When should you reach for a neural network versus a random forest? When does clustering reveal something that supervised learning cannot? When is the most important work not the modelling at all, but the data preparation?

These are the kinds of questions that I find most interesting, and the portfolio gave me a structured context to explore them.

## What the Portfolio Covered

**Component One** addressed customer behaviour in streaming services. I built regression models (single-variable, multi-variable, random forest, and neural network) to predict monthly spending, classification models (logistic regression, random forest, SVM) to predict churn, and clustering models (k-Means and agglomerative) to discover customer segments. The emphasis was on fair comparison: same preprocessing, same splits, same evaluation criteria across all methods.

**Component Two** addressed vehicle damage classification for insurance claim verification. I designed a CNN from scratch, trained it as a baseline, then systematically improved it through regularisation (dropout, L2 decay, augmentation) and hyperparameter tuning. The emphasis here was on understanding generalisation: what makes a model perform well on data it has never seen?

**The Census Analysis** addressed demographic data cleaning and policy-relevant exploratory analysis. This was the most interpretive piece of work, requiring judgment calls about data quality, domain-informed imputation strategies, and the ability to translate statistical findings into concrete recommendations.

## What Working Across These Areas Taught Me

The most important insight was that the core intellectual challenge is the same regardless of the specific technique. Whether you are tuning a CNN or cleaning a census dataset, you are making decisions under uncertainty and trying to ensure that your conclusions are supported by evidence rather than artifacts of your process.

In the streaming analysis, I saw how different models revealed different aspects of the same data. Linear regression showed which individual features mattered. Random Forest showed how features interact. The neural network, despite not outperforming Random Forest on this dataset, demonstrated the importance of understanding when added complexity is justified. Clustering surfaced structure that no supervised model could have found, because it was not looking for a specific target variable.

In the CNN project, I learned that architecture design is less about choosing the "best" configuration and more about building a systematic framework for evaluating alternatives. The baseline-then-regularise-then-tune workflow is not just a good practice; it is a way of thinking about model development that produces trustworthy results.

In the census project, I confronted the fact that the most consequential analytical decisions often happen before any model is built. How you handle a missing value, whether you keep or exclude an outlier, which assumptions you make about edge cases: these choices propagate through every subsequent analysis. Getting them right requires domain knowledge, not just statistical technique.

## Recurring Themes

**Honest evaluation matters more than impressive numbers.** Across all three components, I prioritised rigorous comparison over headline metrics. A model that achieves 95% accuracy on a biased validation set is less useful than one that achieves 80% on a properly constructed evaluation framework.

**Simplicity should be the starting point.** In every case, I started with the simplest reasonable approach and added complexity only when the evidence justified it. This is not just good practice; it is the only way to understand what each layer of complexity contributes.

**Documentation is part of the analysis.** Recording not just what I did but why I did it, and what alternatives I considered, made the work reproducible and the reasoning auditable. In research, this is not optional.

**Domain context changes everything.** The same statistical technique applied without domain understanding produces very different results than the same technique applied with it. Household-level imputation for census ages, class weighting for imbalanced damage categories, stratified splitting for customer churn: each of these choices required understanding the specific problem, not just the general method.

## Why This Matters for Research

A portfolio like this is, in some sense, a proof of range. It shows that I can work with images and tabular data, with neural networks and classical methods, with prediction tasks and interpretive analysis. But range alone is not what matters for research.

What I think matters more is the underlying approach: the habit of asking "why this method?", the discipline of comparing fairly, the willingness to document uncertainty, and the instinct to check whether your model is learning something real or just fitting noise. These habits transfer across any research domain.

I came away from this work with a clearer sense of what I want to investigate further: the intersection of model reliability and real-world application, where the gap between academic benchmarks and practical deployment is widest. I am drawn to problems where getting the modelling right has tangible consequences, whether that means a fair policy recommendation, a reliable damage assessment, or a retention strategy that actually works.
