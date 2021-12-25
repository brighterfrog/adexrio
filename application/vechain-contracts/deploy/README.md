# INSTALL VENV #
# If windows using WSL: install VS code WSL Remote development extensions at https://code.visualstudio.com/docs/remote/wsl-tutorial
# wsl terminal at the vechain-contracts/deploy directory RAN COMMAND TO CREATE VENV:  
# RUN VSCODE FROM THE WSL: Ubuntu interpreter ( REMOTE ) BOTTOM LEFT CORNER CLICK AND REOPEN FOLDER IN WSL 
python3 -m venv .venv 


Tip: When you're ready to deploy the application to other computers, you can create a requirements.txt file with the command pip freeze > requirements.txt (pip3 on macOS/Linux). The requirements file describes the packages you've installed in your virtual environment. With only this file, you or other developers can restore those packages using pip install -r requirements.txt (or, again, pip3 on macOS/Linux). By using a requirements file, you need not commit the virtual environment itself to source control.

# FIRST STEP TO DEPLOY IS EXECUTE THE COMMANDS BELOW 
# activate the env by running a wsl terminal
# CHANGE TO THE vechain-contracts/deploy directory 
source .venv/bin/activate

# SPECIFY AWS CREDENTIALS FILE LOCATION FOR PYTHON IN WSL TERMINAL ( Python )
# For windows:
# CD to %USERPROFILE%\.aws\config
# CD to %USERPROFILE%\.aws\credentials

export AWS_CONFIG_FILE=/mnt/c/users/<username>/.aws/config
export AWS_SHARED_CREDENTIALS_FILE=/mnt/c/users/<username>/.aws/credentials

# TO EXECUTE DEPLOYMENT be in the vechain-contracts/deploy directory 
# docker solo node for development if deploying to dev must be running
# docker run --rm --name mynode -p 127.0.0.1:8669:8669 -p 11235:11235 -p 11235:11235/udp vechain/thor solo --api-addr 0.0.0.0:8669 --api-cors "*"
python3 deploy.py

# UPDATE
Deploying with a single shell script deploy.sh

uses brownie compile to deploy, and write contract address output
uses thor-requests.py ( deploy.sh )