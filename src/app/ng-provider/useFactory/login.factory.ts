import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { LoginService } from './login.service';

export const LoginServiceFactory = (logger: LoggerService, user: UserService) => {
	return new LoginService(logger, user.isLogin);
};
