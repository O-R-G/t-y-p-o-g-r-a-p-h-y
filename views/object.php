<?
$body = $item['body'];
$notes = $item['notes'];
$columns[] = $body;
$columns[] = $notes;

?><section id="main">
	<div id="breadcrumbs">
		<ul class="nav-level">
			<li><?
				if(!$uu->id) {
                    echo $home . '<a href="/*">&thinsp;*&nbsp;</a>';
				} else {
				    ?><a href="/<?= $a_url; ?>"><?= $head; ?></a><?
				}
			?></li>
			<ul class="nav-level">
				<span><? echo $name; ?></span>
			</ul>
		</ul>
	</div>
    <div id='content' class='row'><?
        foreach($columns as $column) {
                ?><div class='column'><?= $column; ?></div><?
        }
    ?></div>
</section>

<script type="text/javascript" src="/static/js/screenfull.js"></script>	
<script>
    var imgs = document.getElementsByTagName('img');
	var i;
	var index;
	for (i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener('click', function () {
			if (screenfull.enabled) {
				screenfull.toggle(this);
			}
			index = i;
			console.log(index);
		}, false);
	}
</script>
