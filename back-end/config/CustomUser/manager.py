from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    use_in_migrations = True
    def create_user(self,email,password=None):
        if not email:
            raise ValueError("User must have email Address")
        user = self.model(
            email = self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using = self._db)
        return user
    def create_superuser(self,email,password=None):
        user = self.create_user(email,password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using = self._db)
        return user
