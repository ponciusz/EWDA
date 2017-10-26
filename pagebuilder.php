<?php

function acf_PageBuilder( $name = '' ) {
	$rows = get_field( $name );
	if ( $rows ) {

		// Adding all page/post related info to $context['post'] Array()
		$context         = Timber::get_context();
		$context['post'] = new TimberPost();

		foreach ( $rows as $row ) {

			$acf_layout     = $row['acf_fc_layout']; // get current pagebuilder section layout
			$context['acf'] = $row; // save ACF flexible content data in this array

			// if Controller for PB section exist inject all data from it to $context Array()
			$context = acf_PageBuilderCustomLogic( $acf_layout, $context );

			Timber::render( [
				'pb/' . $acf_layout . '.twig',
				'pb/fallback.twig'
			], $context ); // Include template if not exist show fallback

		}
	} else {
		return false;
	}
}