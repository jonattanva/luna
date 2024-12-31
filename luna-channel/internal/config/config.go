package config

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/joho/godotenv"
)

type Listen struct {
	Https bool
	Port  string
}

type Metrics struct {
	Enabled bool
}

type SSL struct {
	Cert string
	Key  string
}

type Config struct {
	Listen  Listen
	Metrics Metrics
	SSL     SSL
}

func NewConfig(path string) (*Config, error) {
	filename, err := filepath.Abs(path)
	if err != nil {
		return nil, fmt.Errorf("error getting absolute path: %s", err)
	}

	err = godotenv.Load(filename)
	if err != nil {
		return nil, fmt.Errorf("error loading .env file: %s", err)
	}

	listen := LoadListen()
	metrics := LoadMetrics()
	ssl := LoadSSL()

	return &Config{
		Listen:  listen,
		Metrics: metrics,
		SSL:     ssl,
	}, nil
}

func LoadListen() Listen {
	port := os.Getenv("LISTEN_PORT")
	if port == "" {
		port = "8080"
	}

	https := os.Getenv("LISTEN_HTTPS")
	if https == "" {
		https = "false"
	}

	return Listen{
		Https: https != "false",
		Port:  port,
	}
}

func LoadMetrics() Metrics {
	enabled := os.Getenv("METRICS_ENABLED")
	if enabled == "" {
		enabled = "false"
	}

	return Metrics{
		Enabled: enabled != "false",
	}
}

func LoadSSL() SSL {
	return SSL{
		Key:  os.Getenv("SSL_KEY"),
		Cert: os.Getenv("SSL_CERT"),
	}
}
