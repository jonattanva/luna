package main

import (
	"fmt"
	"monolieta/luna/internal/config"
)

func main() {
	config, err := config.NewConfig(".env")
	if err != nil {
		fmt.Printf("Error loading .env file: %s\n", err)
		return
	}

	fmt.Printf("Starting server at port %s\n", config.Listen.Port)
}
