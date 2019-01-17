var name;

restore_options();

walk(document.body);

setTimeout(function () {
	walk(document.body);
}, 1000);


function walk(node)
{
	// Source: http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	if(!name)
	{
		name = 'Lord Dampnut';
	}

	v = v.replace("Donald Trump", name);
	v = v.replace("donald trump", name);
	v = v.replace("Donald J Trump", name);
	v = v.replace("Donald J. Trump", name);
	v = v.replace("Donald John Trump", name);
	v = v.replace(/\bTrump\b/g, name);
	v = v.replace(/\bTRUMP\b/g, name.toUpperCase());
	v = v.replace(/\bTRUMPS\b/g, name + (name.endsWith('s'),'','s').toUpperCase());
	v = v.replace(/\bTrumps\b/g, name + (name.endsWith('s'),'','s'));
	v = v.replace(/\bpresident\b/g, "");
	v = v.replace(/\bPresident\b/g, "");
	v = v.replace(/\bdonaldjtrump\b/g, name);
	v = v.replace(/\bdonaldtrump\b/g, name);
	v = v.replace(/\brealdonaldtrump\b/g, name);
	v = v.replace(/\brealDonaldTrump\b/g, name);
	v = v.replace(/\bMake America Great Again\b/g, "Make Donald Drumpf " + name + " Again");
	v = v.replace(/\bMake America Great Again!\b/g, "Make Donald Drumpf " + name + " Again!");

	textNode.nodeValue = v;
}

function restore_options() {
  chrome.storage.sync.get({
    favoriteName: 'Lord Dampnut'
  }, function(items) {
        name = items.favoriteName;
  });
}
