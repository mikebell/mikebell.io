jQuery(document).ready(function() {
    jQuery(".timeago").timeago();
    $('article').readingTime({});
    hljs.initHighlightingOnLoad();

    // Open external links in a new window.
    $('a').not('[href*="mailto:"]').each(function () {
        var isInternalLink = new RegExp('/' + window.location.host + '/');
        if ( ! isInternalLink.test(this.href) ) {
            $(this).attr('target', '_blank');
        }
    });
});
