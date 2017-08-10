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

	v = v.replace("Donald Trump", "Lord Dampnut");
	v = v.replace("Donald J Trump", "Lord Dampnut");
	v = v.replace("Donald J. Trump", "Lord Dampnut");
	v = v.replace(/\bTrump\b/g, "Lord Dampnut");
	v = v.replace(/\bTRUMP\b/g, "LORD DAMPNUT");
	v = v.replace(/\bTRUMPS\b/g, "LORD DAMPNUTS");
	v = v.replace(/\bTrumps\b/g, "Lord Dampnuts");
	v = v.replace(/\bpresident\b/g, "");
	v = v.replace(/\bPresident\b/g, "");
	v = v.replace(/\bdonaldjtrump\b/g, "Lord Dampnut");
	v = v.replace(/\bdonaldtrump\b/g, "Lord Dampnut");
	v = v.replace(/\brealdonaldtrump\b/g, "Lord Dampnut");
	v = v.replace(/\brealDonaldTrump\b/g, "Lord Dampnut");
	v = v.replace(/\bMake America Great Again\b/g, "Make Donald Drumpf Lord Dampnut Again");
	v = v.replace(/\bMake America Great Again!\b/g, "Make Donald Drumpf Lord Dampnut Again!");

	textNode.nodeValue = v;
}
