Addition App with Docker and Terraform
A React application that adds two numbers with Node.js backend and PostgreSQL database.
Setup

Install dependencies:

Docker
Docker Compose
Terraform


Deploy with Terraform:

bashCopycd terraform
terraform init
terraform apply
Architecture

Frontend: React (Port 80)
Backend: Node.js (Port 5000)
Database: PostgreSQL
Infrastructure: Docker, Terraform

Monitoring
bashCopy# View container status
docker ps

# View container logs
docker logs react-addition-app-frontend-1
docker logs react-addition-app-backend-1
docker logs react-addition-app-db-1

# Monitor resource usage
docker stats
Stop Application
bashCopyterraform destroy
# or
docker-compose down