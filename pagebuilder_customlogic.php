<?php

function acf_PageBuilderCustomLogic( $acf_layout = '', $context ) {
	$controller = get_template_directory() . "/views/pb/" . $acf_layout . '_ACFcontroller.php';
	if ( file_exists( $controller ) ) {
		require_once( $controller ); // Include file with function
		if ( function_exists( $acf_layout . '_ACFcontroller' ) ) { // Check if function was defined
			$context = call_user_func( $acf_layout . '_ACFcontroller', $context ); // Call function
		}

		return $context;
	} else {

		return $context;
	}
}