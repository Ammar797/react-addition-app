# main.tf
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "null_resource" "deployment" {
  provisioner "local-exec" {
    command = "docker-compose up -d"
    working_dir = ".."
  }
}