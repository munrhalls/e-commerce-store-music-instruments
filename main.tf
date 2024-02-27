terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}


provider "digitalocean" {
  token = var.DROPLET_token
}

variable "droplet_name_base" {
  type = string
  default = "ubuntu-s-1vcpu-512mb-10gb-fra1-01"
}

data "digitalocean_droplet" "app_server" {
  name = var.droplet_name_base
}

variable "DROPLET_token" {
  type = string
}

data "digitalocean_droplet" "app_server" {
  name = "ubuntu-s-1vcpu-512mb-10gb-fra1-01"
}


output "droplet_ip" {
  value = data.digitalocean_droplet.app_server.ipv4_address
}

data "external" "tag_generator" {
  program = ["sh", "./parseCommitToTag.sh"]
}

output "generated_tag" {
  value = data.external.tag_generator.result
}