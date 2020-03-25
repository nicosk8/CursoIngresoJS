function mostrar()
{
	var planeta=prompt('Ingrese un planeta del sistema solar').toLowerCase();
	switch(planeta){
		case 'mercurio':
		case 'venus':
				alert('Acá hace más calor D:')
				break;
		case 'tierra': 
				alert('¡Acá vivimos!');
				break;
		case 'marte':
				alert('Acá hace un la calarrrrrr');
				break;
		case 'jupiter':
		case 'saturno':
		case 'urano':
		case 'neptuno':
		case 'pluton':
				alert('acá hace más frio :D');
		default:
				alert('Ingrese un planeta válido. ACLARACIÓN: El Sol es una estrella.');
				break;

	}
}
